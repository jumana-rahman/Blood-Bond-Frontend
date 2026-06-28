import axiosInstance from "@/lib/axios";

export const applyTrainer =
  async (data) => {

    const res =
      await axiosInstance.post(
        "/trainers/apply",
        data
      );

    return res.data;
  };