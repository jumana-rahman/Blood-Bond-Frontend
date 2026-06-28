import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl">

      <div className="flex items-center gap-4">

        <Image
          src={item.image}
          alt={item.name}
          width={70}
          height={70}
          className="rounded-full"
        />

        <div>

          <h3 className="font-bold text-xl">
            {item.name}
          </h3>

          <p className="text-gray-500">
            {item.role}
          </p>

        </div>

      </div>

      <div className="flex gap-1 mt-5">

        {[...Array(item.rating)].map((_, index) => (
          <FaStar
            key={index}
            className="text-yellow-500"
          />
        ))}

      </div>

      <p className="mt-6 text-gray-600 leading-8">
        "{item.review}"
      </p>

    </div>
  );
}