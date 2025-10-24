"use client";



interface User {
  name: string;
  email: string;
  role: string;
  status: "Active" | "Pending" | "Suspended";
}

interface LatestUsersTableProps {
  users?: User[];
}

export default function LatestUsersTable({
  users = [
    { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Pending" },
    { name: "Michael Chen", email: "michael@example.com", role: "Viewer", status: "Active" },
    { name: "Lisa Wong", email: "lisa@example.com", role: "Editor", status: "Suspended" },
  ],
}: LatestUsersTableProps) {
  return (
    <div className="bg-white shadow-sm rounded-2xl border border-gray-100 p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Latest Users</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-gray-500 uppercase text-xs border-b">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 font-medium text-gray-800 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{user.email}</td>
                <td className="py-3 px-4 whitespace-nowrap">{user.role}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
