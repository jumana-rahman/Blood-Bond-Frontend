import Link from "next/link";
import { FaFacebookF, FaInstagram, FaStar } from "react-icons/fa";

export default function TrainerCard({ trainer }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">

      <div className="relative overflow-hidden">

        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-96 w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

          <button className="bg-white p-3 rounded-full">
            <FaFacebookF />
          </button>

          <button className="bg-white p-3 rounded-full">
            <FaInstagram />
          </button>

        </div>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {trainer.name}
        </h3>

        <p className="text-blue-600 mt-2">
          {trainer.specialty}
        </p>

        <div className="flex justify-between mt-5">

          <span>
            {trainer.experience}
          </span>

          <span className="flex items-center gap-2">

            <FaStar className="text-yellow-500" />

            {trainer.rating}

          </span>

        </div>

        <Link
          href={`/trainers/${trainer.id}`}
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          View Profile
        </Link>

      </div>

    </div>
  );
}