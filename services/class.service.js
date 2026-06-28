import axiosInstance from "@/lib/axios";

export const getClasses = async (
  params = {}
) => {
  const res =
    await axiosInstance.get(
      "/classes",
      {
        params,
      }
    );

  return res.data;
};

export const getClassById =
  async (id) => {
    const res =
      await axiosInstance.get(
        `/classes/${id}`
      );

    return res.data;
  };

export const createClass =
  async (data) => {
    const res =
      await axiosInstance.post(
        "/classes",
        data
      );

    return res.data;
  };

export const updateClass =
  async (id, data) => {
    const res =
      await axiosInstance.patch(
        `/classes/${id}`,
        data
      );

    return res.data;
  };

export const deleteClass =
  async (id) => {
    const res =
      await axiosInstance.delete(
        `/classes/${id}`
      );

    return res.data;
  };