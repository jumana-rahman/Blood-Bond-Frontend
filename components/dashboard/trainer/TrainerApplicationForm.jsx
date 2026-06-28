"use client";

import { useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { applyTrainer } from "@/services/trainer.service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function TrainerApplicationForm() {
  const router =
  useRouter();
  const {
    register,
    handleSubmit,
  } = useForm();

const onSubmit = async (
  data
) => {
  try {

    await applyTrainer(
      data
    );

    toast.success(
      "Application submitted successfully"
    );

    router.push(
      "/dashboard/member"
    );

  } catch (error) {

    console.log(error);

    toast.error(
      error?.response?.data?.message ||
      "Failed to submit application"
    );

  }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow space-y-5"
    >
      

      <Input
        label="Age"
        type="number"
        {...register("age")}
      />

      <Input
        label="Experience (Years)"
        type="number"
        {...register("experience")}
      />

      <Input
        label="Profile Image URL"
        {...register("image")}
      />

      <div>

        <label className="block mb-2 font-medium">
          Skills
        </label>

        <input
          className="w-full border rounded-xl p-3"
          placeholder="Fitness, Yoga, Cardio"
          {...register("skills")}
        />

      </div>

 

      <div>

        <label className="block mb-2 font-medium">
          Bio
        </label>

        <textarea
          rows={5}
          className="w-full border rounded-xl p-3"
          {...register("bio")}
        />

      </div>

      <Button
        type="submit"
        className="w-full"
      >
        Submit Application
      </Button>

    </form>
  );
}