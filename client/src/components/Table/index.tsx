"use client";

import { useState, useEffect } from "react";
import { User, getUser } from "@/services/Users";

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUser().then(setUsers).catch(() => setUsers([]));
  }, []);

  if (users.length === 0) {
    return <p className="text-center text-gray-500 py-4">Nenhum usuário para exibir.</p>;
  }

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Nome</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Sobrenome</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Idade</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}