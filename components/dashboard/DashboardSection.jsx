export default function DashboardSection({
  title,
  children,
}) {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow">
      <h2 className="text-xl font-bold mb-6">
        {title}
      </h2>

      {children}
    </section>
  );
}