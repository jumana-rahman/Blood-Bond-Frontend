import Link from "next/link";

import VoteButtons from "@/components/forum/VoteButtons";
import CommentSection from "@/components/forum/CommentSection";

export default function ForumDetailsPage() {
  const isLoggedIn = false;

  const post = {
    title: "Best Workout Routine",
    content:
      "Full detailed workout routine content goes here...",
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-4xl mx-auto py-10">

        <h1 className="text-4xl font-bold">
          {post.title}
        </h1>

        <p className="mt-4 text-gray-600">
          {post.content.slice(0, 120)}...
        </p>

        <div className="mt-8 p-6 border rounded-xl">

          <h3 className="font-bold text-xl">
            Login Required
          </h3>

          <p className="mt-2">
            Login to read full post, vote and comment.
          </p>

          <Link
            href="/login"
            className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Login
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10">

      <h1 className="text-4xl font-bold">
        {post.title}
      </h1>

      <p className="mt-5">
        {post.content}
      </p>

      <VoteButtons />

      <CommentSection />

    </div>
  );
}