"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ImageIcon,
  MapPin,
  Droplets,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { donorRegisterSchema } from "@/lib/validations/donor.schema";
import { uploadImage } from "@/lib/uploadImage";
import { signUp } from "@/lib/auth-client";
import Image from "next/image";
import { Button } from "@heroui/react";

const bloodGroups = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

export default function DonorRegisterForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [uploading, setUploading] = useState(false);
  const [districtsList, setDistrictsList] = useState([]);
  const [allUpazilas, setAllUpazilas] = useState([]);
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(donorRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      avatar: "",
      bloodGroup: "",
      district: "",
      upazila: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const selectedDistrict = watch("district");

  useEffect(() => {
    const loadGeographicalData = async () => {
      try {
        const [districtsRes, upazilasRes] = await Promise.all([
          fetch("/data/districts.json"),
          fetch("/data/upazilas.json"),
        ]);

        if (!districtsRes.ok || !upazilasRes.ok) {
          throw new Error("Failed to load location data.");
        }

        const districts = await districtsRes.json();
        const upazilas = await upazilasRes.json();

        setDistrictsList([...districts].sort((a, b) => a.name.localeCompare(b.name)));
        setAllUpazilas(upazilas);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load location data.");
      }
    };

    loadGeographicalData();
  }, []);

  useEffect(() => {
    if (!selectedDistrict) {
      setFilteredUpazilas([]);
      setValue("upazila", "");
      return;
    }

    const filtered = allUpazilas.filter(
      (item) => Number(item.district_id) === Number(selectedDistrict)
    );

    setFilteredUpazilas(filtered);
    setValue("upazila", "");
  }, [selectedDistrict, allUpazilas, setValue]);

  const handleAvatarUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const imageUrl = await uploadImage(file);
      setAvatar(imageUrl);
      setValue("avatar", imageUrl, { shouldValidate: true });
      toast.success("Avatar uploaded successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const result = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.avatar,
        role: "donor",
      });

      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      const district = districtsList.find(
        (item) => Number(item.id) === Number(data.district)
      );

      const donorData = {
        name: data.name,
        email: data.email,
        avatar: data.avatar,
        bloodGroup: data.bloodGroup,
        district: district?.name || "",
        upazila: data.upazila,
      };

      console.log(donorData);
      toast.success("Account Created Successfully");
      reset();
      setAvatar("");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed");
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#C62828] to-red-700 px-10 py-12 text-white text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-6">
          <Droplets className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight">Become a Blood Donor</h2>
        <p className="mt-3 text-red-100 text-lg">
          Your donation can save up to 3 lives
        </p>
      </div>

      <div className="p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <User size={20} />
              </div>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your full name"
                className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828] text-base placeholder:text-gray-400"
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={20} />
              </div>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828] text-base placeholder:text-gray-400"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Avatar Upload - Unchanged */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-gray-700">
              Profile Picture
            </label>
            <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-300 p-8 hover:border-[#C62828] hover:bg-red-50 transition-all duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                <ImageIcon size={28} className="text-[#C62828]" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {uploading ? "Uploading..." : avatar ? "Change Photo" : "Upload Profile Photo"}
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarUpload}
              />
            </label>

            {avatar && (
              <div className="mt-6 flex justify-center">
                <div className="relative">
                  <Image
                    src={avatar}
                    height={112}
                    width={112}
                    alt="Avatar"
                    className="h-28 w-28 rounded-full border-4 border-white shadow-md object-cover ring-2 ring-[#C62828]/20"
                  />
                </div>
              </div>
            )}

            {errors.avatar && (
              <p className="mt-2 text-sm text-red-500">{errors.avatar.message}</p>
            )}
          </div>

          {/* Blood Group & Location Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blood Group */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-700">Blood Group</label>
              <div className="relative">
                <Droplets size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C62828]" />
                <select
                  {...register("bloodGroup")}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-5 text-lg focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828] outline-none"
                >
                  <option value="">Select Blood Group</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
              {errors.bloodGroup && (
                <p className="mt-1 text-sm text-red-500">{errors.bloodGroup.message}</p>
              )}
            </div>

            {/* District */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-700">District</label>
              <div className="relative">
                <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C62828]" />
                <select
                  {...register("district")}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-5 text-lg focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828] outline-none"
                >
                  <option value="">Select District</option>
                  {districtsList.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              {errors.district && (
                <p className="mt-1 text-sm text-red-500">{errors.district.message}</p>
              )}
            </div>
          </div>

          {/* Upazila */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-gray-700">Upazila</label>
            <div className="relative">
              <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C62828]" />
              <select
                {...register("upazila")}
                disabled={!selectedDistrict}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-5 text-lg focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828] outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">Select Upazila</option>
                {filteredUpazilas.map((upazila) => (
                  <option key={upazila.id} value={upazila.name}>
                    {upazila.name}
                  </option>
                ))}
              </select>
            </div>
            {errors.upazila && (
              <p className="mt-1 text-sm text-red-500">{errors.upazila.message}</p>
            )}
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Minimum 6 characters"
                  className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828] text-base placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={20} />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                  placeholder="Confirm your password"
                  className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828] text-base placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          {/* Terms */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register("terms")}
                className="mt-1.5 h-5 w-5 accent-[#C62828] cursor-pointer"
              />
              <span className="text-sm text-gray-600 leading-relaxed">
                I agree to the{" "}
                <Link href="/terms" className="font-medium text-[#C62828] hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="font-medium text-[#C62828] hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
            {errors.terms && (
              <p className="mt-2 text-sm text-red-500">{errors.terms.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            loading={isSubmitting || uploading}
            disabled={isSubmitting || uploading}
            className="w-full py-7 text-lg font-semibold text-white bg-[#C62828] hover:bg-red-700 transition-all rounded-2xl shadow-lg shadow-red-200"
          >
            {uploading
              ? "Uploading Avatar..."
              : isSubmitting
              ? "Creating Account..."
              : "Register as Donor"}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#C62828] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}