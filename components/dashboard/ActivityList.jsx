const activities = [
  "New user registered",
  "Trainer application submitted",
  "Payment completed",
  "New class created",
];

export default function ActivityList() {
  return (
    <div className="space-y-4">

      {activities.map((item, index) => (
        <div
          key={index}
          className="border rounded-xl p-4"
        >
          {item}
        </div>
      ))}

    </div>
  );
}