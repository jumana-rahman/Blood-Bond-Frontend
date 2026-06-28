"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


import useAuth from "./useAuth";
import { ROLES } from "@/constants/roles";
import AuthService from "@/services/auth.service";

export default function useLogin() {
  const router = useRouter();
  const { loadUser } = useAuth();

  const login = async (formData) => {
    try {
      const res = await AuthService.login(formData);

      await loadUser();

      toast.success(res.message || "Login successful");

      const role = res?.user?.role;

      if (role === ROLES.ADMIN) {
        router.push("/dashboard/admin");
      } else if (role === ROLES.TRAINER) {
        router.push("/dashboard/trainer");
      } else {
        router.push("/dashboard/member");
      }

      return {
        success: true,
      };
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Login failed"
      );

      return {
        success: false,
      };
    }
  };

  return {
    login,
  };
}