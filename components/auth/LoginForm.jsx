"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { authClient, signIn } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SocialLogin from "./SocialLogin";

import { loginSchema } from "@/lib/validations/auth.schema";


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

    const role =
      session?.data?.user?.role;

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
    <>
      <h2 className="text-4xl font-bold">
        Login
      </h2>

      <p className="text-gray-500 mt-2 mb-8">
        Welcome back! Please login to continue.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
 <Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  leftIcon={<Mail size={18} />}
  {...register("email")}
  error={errors.email?.message}
/>

        <Input
  label="Password"
  type={showPassword ? "text" : "password"}
  placeholder="Enter your password"
  leftIcon={<Lock size={18} />}
  rightIcon={
    showPassword ? (
      <EyeOff size={18} />
    ) : (
      <Eye size={18} />
    )
  }
  onRightIconClick={() =>
    setShowPassword(!showPassword)
  }
  {...register("password")}
  error={errors.password?.message}
/>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="rounded"
            />
            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
  type="submit"
  loading={isSubmitting}
  className="w-full"
>
  Login
</Button>
      </form>

      

      <p className="mt-8 text-center text-sm">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </>
  );
}