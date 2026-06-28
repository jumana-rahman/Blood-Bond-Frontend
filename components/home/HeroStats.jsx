export default function HeroStats() {
  const stats = [
    {
      value: "20K+",
      label: "Members",
    },
    {
      value: "120+",
      label: "Trainers",
    },
    {
      value: "80+",
      label: "Classes",
    },
    {
      value: "15+",
      label: "Branches",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20"
        >
          <h2 className="text-3xl font-bold">
            {item.value}
          </h2>

          <p className="text-gray-200 mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}