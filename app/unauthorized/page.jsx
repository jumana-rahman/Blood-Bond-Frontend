import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold">
        403
      </h1>

      <p className="mt-4 text-gray-500">
        You are not authorized.
      </p>

      <Link
        href="/"
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Back Home
      </Link>

    </div>
  );
}