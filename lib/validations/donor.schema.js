import { z } from "zod";

export const donorRegisterSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters"),

    email: z
      .string()
      .email("Please enter a valid email"),

    avatar: z
      .string()
      .min(1, "Please upload your avatar"),

    bloodGroup: z
      .string()
      .min(1, "Please select your blood group"),

    district: z
      .string()
      .min(1, "Please select your district"),

    upazila: z
      .string()
      .min(1, "Please select your upazila"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(100),

    confirmPassword: z
      .string()
      .min(6, "Please confirm your password"),

    terms: z.literal(true, {
      errorMap: () => ({
        message: "You must accept the Terms & Conditions",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });