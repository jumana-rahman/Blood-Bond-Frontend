import ApplicationsTable from "@/components/dashboard/user/ApplicationTable";
import DataTable from "@/components/table/DataTable";

const applications = [
  {
    id: 1,
    name: "Shahid",
    experience: 3,
    status: "Pending",
  },
  {
    id: 2,
    name: "Rahim",
    experience: 5,
    status: "Pending",
  },
];

export default function ApplicationsPage() {
  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "experience",
      label: "Experience",
    },
    {
      key: "status",
      label: "Status",
    },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Trainer Applications
      </h1>

      <ApplicationsTable/>

    </div>
  );
}