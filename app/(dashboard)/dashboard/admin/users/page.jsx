import DataTable from "@/components/table/DataTable";

const users = [
  {
    id: 1,
    name: "Shahid",
    email: "shahid@gmail.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Rahim",
    email: "rahim@gmail.com",
    role: "Trainer",
  },
  {
    id: 3,
    name: "Karim",
    email: "karim@gmail.com",
    role: "Member",
  },
];

export default function UsersPage() {
  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "role",
      label: "Role",
    },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Users
      </h1>

      <DataTable
        columns={columns}
        data={users}
      />

    </div>
  );
}