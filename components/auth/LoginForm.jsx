"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { authClient, signIn } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";

import { loginSchema } from "@/lib/validations/auth.schema";
import { Button, Input } from "@heroui/react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      const session = await authClient.getSession();
      const role = session?.data?.user?.role;

      if (role === "admin") {
        router.push("/dashboard/admin");
      } else if (role === "volunteer") {
        router.push("/dashboard/volunteer");
      } else {
        router.push("/dashboard/donor");
      }

      router.refresh();
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#C62828] to-red-700 px-10 py-10 text-white text-center">
        <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
          <Lock className="w-9 h-9" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight">Welcome Back</h2>
        <p className="mt-3 text-red-100 text-lg">
          Sign in to continue your journey
        </p>
      </div>

      <div className="p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Email */}
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            startContent={<Mail size={20} className="text-gray-400" />}
            {...register("email")}
            errorMessage={errors.email?.message}
            classNames={{
              base: "w-full",
              inputWrapper: "bg-gray-50 border border-gray-200 p-4 w-full hover:border-gray-300 focus-within:border-[#C62828] rounded-2xl h-14",
              label: "text-gray-700 font-medium",
              input: "text-base placeholder:text-gray-400",
            }}
          />

          {/* Password */}
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            startContent={<Lock size={20} className="text-gray-400" />}
            endContent={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            }
            {...register("password")}
            errorMessage={errors.password?.message}
            classNames={{
              base: "w-full",
              inputWrapper: "bg-gray-50 border border-gray-200 p-4 w-full hover:border-gray-300 focus-within:border-[#C62828] rounded-2xl h-14",
              label: "text-gray-700 font-medium",
              input: "text-base placeholder:text-gray-400",
            }}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#C62828] rounded"
              />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-[#C62828] hover:underline font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button - Smaller Size */}
          <Button
            type="submit"
            isLoading={isSubmitting}
            className="w-full py-3.5 text-base font-semibold text-white bg-[#C62828] hover:bg-red-700 transition-all rounded-2xl shadow-md"
          >
            Sign In
          </Button>
        </form>

        {/* Register Link */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-[#C62828] hover:underline"
          >
            Register as Donor
          </Link>
        </p>
      </div>
    </div>
  );
}