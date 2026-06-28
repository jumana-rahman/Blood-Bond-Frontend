"use client";

export default function Newsletter() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-3xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          Subscribe Our Newsletter
        </h2>

        <p className="mt-4 text-gray-500">
          Receive fitness tips, offers and new classes every week.
        </p>

        <form className="mt-10 flex flex-col md:flex-row gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border rounded-xl px-5 py-4 outline-none"
          />

          <button
            className="bg-blue-600 text-white px-8 rounded-xl hover:bg-blue-700"
          >
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}