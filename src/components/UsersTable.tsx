"use client";

import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Calendar,
  Loader2,
  Edit2,
  Trash2,
  Plus,
} from "lucide-react";

interface UserData {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export default function UserTable() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState<UserData | null>(null);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // Fetch users
  async function fetchUsers() {
    try {
      setLoading(true);

      const res = await fetch("/api/users");

      if (!res.ok) {
        console.error("Failed to fetch users:", res.status, res.statusText);
        setUsers([]);
        return;
      }

      const data = await res.json();

      if (!Array.isArray(data)) {
        console.error("Invalid data dormat:", data);
        setUsers([]);
        return;
      }

      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add user
  async function addUser() {
    if (!newUser.name || !newUser.email) return alert("All fields required");
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    setNewUser({ name: "", email: "" });
    fetchUsers();
  }

  // Update user
  async function updateUser() {
    if (!editingUser) return;
    await fetch("/api/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingUser),
    });
    setEditingUser(null);
    fetchUsers();
  }

  // Delete user
  async function deleteUser(id: number) {
    if (!confirm("Are you sure?")) return;
    await fetch("/api/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchUsers();
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-40 text-gray-500">
        <Loader2 className="w-6 h-6 animate-spin mr-2" /> Loading users...
      </div>
    );

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <User className="w-5 h-5 text-indigo-600" />
          Manage Users
        </h2>
        <button
          onClick={addUser}
          className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Form Add User */}
      <div className="p-4 grid md:grid-cols-2 gap-3 border-b border-gray-100">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left font-medium">#</th>
              <th className="px-6 py-3 text-left font-medium">Name</th>
              <th className="px-6 py-3 text-left font-medium">Email</th>
              <th className="px-6 py-3 text-left font-medium">Joined</th>
              <th className="px-6 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={user.id}
                  className="border-b last:border-0 hover:bg-gray-50"
                >
                  <td className="px-6 py-3">{index + 1}</td>
                  <td className="px-6 py-3">
                    {editingUser?.id === user.id ? (
                      <input
                        className="border px-2 py-1 rounded w-full"
                        value={editingUser.name}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="px-6 py-3">
                    {editingUser?.id === user.id ? (
                      <input
                        className="border px-2 py-1 rounded w-full"
                        value={editingUser.email}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            email: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {user.email}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {new Date(user.createdAt).toLocaleDateString("id-ID")}
                    </div>
                  </td>
                  <td className="px-6 py-3 text-right space-x-2">
                    {editingUser?.id === user.id ? (
                      <button
                        onClick={updateUser}
                        className="text-green-600 hover:underline"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => setEditingUser(user)}
                        className="text-indigo-600 hover:underline"
                      >
                        <Edit2 className="w-4 h-4 inline mr-1" />
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-600 hover:underline"
                    >
                      <Trash2 className="w-4 h-4 inline mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-gray-500 italic"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Version (card style) */}
      <div className="md:hidden divide-y divide-gray-100">
        {users.map((user) => (
          <div key={user.id} className="p-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-gray-900">{user.name}</h3>
              <span className="text-xs text-gray-500">
                {new Date(user.createdAt).toLocaleDateString("id-ID")}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="w-4 h-4 text-gray-400" />
              {user.email}
            </div>
            <div className="mt-2 flex justify-end gap-3">
              <button
                onClick={() => setEditingUser(user)}
                className="text-indigo-600 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="text-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
