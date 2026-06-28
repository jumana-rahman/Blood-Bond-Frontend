import Link from "next/link";

export default function ClassCard({ item }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">

      <div className="overflow-hidden">

        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
        />

      </div>

      <div className="p-6">

        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {item.category}
        </span>

        <h3 className="text-2xl font-bold mt-4">
          {item.name}
        </h3>

        <p className="text-gray-500 mt-2">
          Trainer : {item.trainer}
        </p>

        <div className="flex justify-between mt-5">

          <span>{item.duration}</span>

          <span className="font-bold">
            {item.price}
          </span>

        </div>

        <div className="flex justify-between mt-5">

          <span className="text-sm text-gray-500">
            {item.bookings} Bookings
          </span>

          <Link
            href={`/classes/${item.id}`}
            className="text-blue-600 font-semibold"
          >
            View Details →
          </Link>

        </div>

      </div>

    </div>
  );
}