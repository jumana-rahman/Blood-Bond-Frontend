"use client";

import DataTable from "@/components/table/DataTable";
import { useEffect, useState } from "react";
import { getApplications } from "@/services/admin.service";
import TableActions from "../../table/TableActions";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";




export default function ApplicationsTable() {
  const router = useRouter();
  const {
  data: session,
} = useSession();
 const [applications, setApplications] =
  useState([]);

const [loading, setLoading] =
  useState(true);

  const fetchApplications =
  async () => {
    try {

      const res =
        await getApplications();
        

        if(res.data && Array.isArray(res.data)) {
          setApplications(res.data);
        }

    

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };
  useEffect(() => {
  fetchApplications();
}, []);

console.log(applications);
 const columns = [
  {
    key: "name",
    label: " Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "age",
    label: "Age",
  },
  {
    key: "experience",
    label: "Experience",
  },
  {
    key: "skills",
    label: "Skills",
  },
];

  if (loading) {
  return (
    <p>
      Loading...
    </p>
  );
}
const handleDelete = async (
  id
) => {

  const confirmDelete =
    window.confirm(
      "Are you sure you want to delete this class?"
    );

  if (!confirmDelete) {
    return;
  }

  try {

    await deleteClass(id);

    toast.success(
      "Class deleted successfully"
    );

    fetchClasses();

  } catch (error) {

    console.log(error);

    toast.error(
      "Failed to delete class"
    );

  }
};

const actions = (row) => (
  <TableActions
    onEdit={() =>
      router.push(
        `/dashboard/${session?.user?.role}/applications/edit/${row._id}`
      )
    }
    onDelete={
      session?.user?.role === "admin"
        ? () =>
            handleDelete(
              row._id
            )
        : undefined
    }
  />
);
  return (
    <DataTable
      columns={columns}
  data={applications||[]}
  actions={actions}
    />
  );
}