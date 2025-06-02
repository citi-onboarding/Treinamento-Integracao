"use client";

import React, { useState } from "react";
import { postUser } from "../../services/PostUsers";

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
}

const Form: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    age: "",
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    try {
      await postUser({
        firstName: form.firstName,
        lastName: form.lastName,
        age: Number(form.age),
      });
      setForm({ firstName: "", lastName: "", age: "" });
      setMessage("Enviado com sucesso!");
    } catch {
      setMessage("Erro ao enviar.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xs mx-auto mt-10 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md flex flex-col gap-4"
      >
        <input
          name="firstName"
          placeholder="Nome"
          value={form.firstName}
          onChange={(e) =>
            setForm((f) => ({ ...f, firstName: e.target.value }))
          }
          required
          className="p-2 border border-gray-300 rounded"
        />
        <input
          name="lastName"
          placeholder="Sobrenome"
          value={form.lastName}
          onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
          required
          className="p-2 border border-gray-300 rounded"
        />
        <input
          name="age"
          type="number"
          placeholder="Idade"
          value={form.age}
          onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))}
          required
          min={0}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Enviar
        </button>
        {message && <p className="text-center text-blue-700 m-0">{message}</p>}
      </form>
    </div>
  );
};

export default Form;
