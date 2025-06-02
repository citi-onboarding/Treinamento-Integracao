"use client";

import React, { useState, useEffect } from "react";
import UserCard from "../UserCard";

interface User {
  age: number;
  firstName: string;
  lastName: string;
  id: number;
}

const predefinedUsers: User[] = [
  { id: 1, firstName: "Ana", lastName: "Silva", age: 28 },
  { id: 2, firstName: "Bruno", lastName: "Souza", age: 34 },
];

const UserCardList = () => {
  const [users] = useState<User[]>(predefinedUsers);
  
  if (users.length === 0) {
    return (
      <div className="flex justify-center mt-6">
        <span className="text-red-600">Nenhum usuário encontrado.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-4 mt-6 p-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserCardList;
