import Link from "next/link";

export default function ForumCard({ post }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <img
        src={post.image}
        alt={post.title}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <div className="flex items-center gap-3">

          <img
            src={post.avatar}
            alt={post.author}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>

            <h4 className="font-semibold">
              {post.author}
            </h4>

            <p className="text-sm text-gray-500">
              {post.date}
            </p>

          </div>

        </div>

        <h3 className="text-2xl font-bold mt-5">
          {post.title}
        </h3>

        <p className="text-gray-500 mt-4">
          {post.description}
        </p>

        <Link
          href={`/forum/${post.id}`}
          className="inline-block mt-6 text-blue-600 font-semibold"
        >
          Read More →
        </Link>

      </div>

    </div>
  );
}