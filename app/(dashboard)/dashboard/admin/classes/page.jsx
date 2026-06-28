import Link from "next/link";

import ClassTable from "@/components/classes/ClassTable";

export default function ClassesPage() {
  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Classes
        </h1>

        <Link
          href="/dashboard/admin/classes/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Add Class
        </Link>

      </div>

      <ClassTable />

    </div>
  );
}