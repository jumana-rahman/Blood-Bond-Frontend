import data from "@/data/mainData";

export const getDistricts = () => {
  return [...data.districts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
};

export const getUpazilasByDistrict = (districtId) => {
  if (!districtId) return [];

  return data.upazilas
    .filter(
      (item) =>
        Number(item.district_id) ===
        Number(districtId)
    )
    .sort((a, b) =>
      a.name.localeCompare(b.name)
    );
};