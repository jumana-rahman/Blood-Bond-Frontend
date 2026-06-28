import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-blue-600 py-20">

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-10">

        <div>

          <h2 className="text-5xl font-bold text-white">
            Ready To Transform Your Life?
          </h2>

          <p className="text-blue-100 mt-4 text-lg">
            Join thousands of members and start your fitness journey today.
          </p>

        </div>

        <Link
          href="/register"
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Join Today
        </Link>

      </div>

    </section>
  );
}