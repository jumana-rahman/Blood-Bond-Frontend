const trainers = [
  {
    id: 1,
    name: "John Smith",
    specialty: "Fitness",
  },
  {
    id: 2,
    name: "Alex",
    specialty: "Yoga",
  },
];

export default function TrainersTable() {
  return (
    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>
          <tr className="border-b">

            <th className="text-left py-3">
              Name
            </th>

            <th className="text-left py-3">
              Specialty
            </th>

            <th className="text-left py-3">
              Status
            </th>

          </tr>
        </thead>

        <tbody>

          {trainers.map((trainer) => (
            <tr
              key={trainer.id}
              className="border-b"
            >
              <td className="py-3">
                {trainer.name}
              </td>

              <td className="py-3">
                {trainer.specialty}
              </td>

              <td className="py-3">

                <button className="px-3 py-1 bg-green-600 text-white rounded-lg">
                  Approve
                </button>

              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}