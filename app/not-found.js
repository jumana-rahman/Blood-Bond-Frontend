import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold">
        404
      </h1>

      <p className="mt-3">
        Page Not Found
      </p>

      <Link
        href="/"
        className="mt-6 bg-black text-white px-5 py-2 rounded"
      >
        Back Home
      </Link>

    </div>
  );
}