const users = [
  {
    id: 1,
    name: "Shahid",
    email: "shahid@gmail.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Rahim",
    email: "rahim@gmail.com",
    role: "Trainer",
  },
];

export default function UsersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left py-3">
              Name
            </th>

            <th className="text-left py-3">
              Email
            </th>

            <th className="text-left py-3">
              Role
            </th>

            <th className="text-left py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b"
            >
              <td className="py-3">
                {user.name}
              </td>

              <td className="py-3">
                {user.email}
              </td>

              <td className="py-3">
                {user.role}
              </td>

              <td className="py-3">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}