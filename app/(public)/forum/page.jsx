import ForumCard from "@/components/forum/ForumCard";

const posts = [
  {
    id: 1,
    title: "Best Workout Routine",
    content:
      "This is a detailed workout routine for muscle gain...",
    votes: 25,
  },
  {
    id: 2,
    title: "Weight Loss Tips",
    content:
      "Here are the most effective weight loss strategies...",
    votes: 18,
  },
];

export default function CommunityPage() {
  return (
    <div className="max-w-6xl mx-auto py-10">

      <h1 className="text-4xl font-bold mb-8">
        Community Forum
      </h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <ForumCard
            key={post.id}
            post={post}
          />
        ))}
      </div>

    </div>
  );
}