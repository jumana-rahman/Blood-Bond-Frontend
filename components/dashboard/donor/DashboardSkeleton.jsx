export default function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">

      <div className="h-40 rounded-2xl bg-gray-200" />

      <div className="rounded-2xl bg-white p-6">

        <div className="mb-5 h-8 w-72 rounded bg-gray-200" />

        <div className="space-y-4">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-16 rounded bg-gray-100"
            />
          ))}

        </div>

      </div>

    </div>
  );
}