import axiosInstance from "@/lib/axios";

export const getApplications = async (
  params = {}
) => {
  const res =
    await axiosInstance.get(
      "/trainers/applications",
      {
        params,
      }
    );

  return res.data;
};