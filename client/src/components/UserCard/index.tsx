import React from "react";

interface User {
  age: number;
  firstName: string;
  lastName: string;
  id: number; 
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div
      className="w-72 flex-shrink-0 rounded bg-white p-4 shadow flex flex-col items-center"
    >
      <span className="font-bold text-lg">{user.firstName}</span>
      <span className="text-gray-700 text-md">{user.lastName}</span>
      <span className="text-sm text-gray-700 mt-2">Idade: {user.age}</span>
    </div>
  );
};

export default UserCard;