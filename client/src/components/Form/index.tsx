"use client";

import { useState, FormEvent } from "react";
import { User, createUser } from "@/services/Users";

export default function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(Number);

  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setAge(0);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const userData: Omit<User, 'id'> = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      age: age,
  };

  try {
    await createUser(userData);
    resetFormFields();
  } catch (error: any) {
    console.error("Erro ao criar usuário:", error);
    alert("Erro ao criar usuário. Por favor, tente novamente.");
  }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Adicionar Novo Usuário</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="form-firstName">Nome</label>
        <input
          id="form-firstName"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="form-lastName">Sobrenome</label>
        <input
          id="form-lastName"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="form-age">Idade</label>
        <input
          id="form-age"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          value={age === 0 ? "" : age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>

      <div className="flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Adicionar Usuário
        </button>
      </div>
    </form>
  );
}