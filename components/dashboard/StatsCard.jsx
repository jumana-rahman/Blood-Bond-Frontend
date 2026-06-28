export default function StatsCard({
  title,
  value,
}) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}