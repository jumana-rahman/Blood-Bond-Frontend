import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-2xl border bg-white p-12 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

        <HeartHandshake
          size={40}
          className="text-red-600"
        />

      </div>

      <h2 className="mt-6 text-2xl font-bold">
        No Donation Requests Yet
      </h2>

      <p className="mt-3 text-gray-500">
        You haven't created any donation request.
      </p>

      <Link
        href="/dashboard/donor/create-donation-request"
        className="mt-8 inline-block rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700"
      >
        Create Donation Request
      </Link>

    </div>
  );
}