import React from "react";
import { PiggyBank } from "lucide-react";

interface UserCardProps {
  firstName: string;
  lastName: string;
  age: number;
}

const UserCard: React.FC<UserCardProps> = ({ firstName, lastName, age }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 max-w-72 w-full transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
      <div className="flex flex-col items-center gap-5">
        {/* Ícone de perfil */}
        <div>
          <PiggyBank className="w-16 h-16 text-gray-600" />
        </div>
        {/* Dados do usuário */}
        <div className="flex flex-col gap-3 w-full">
          <div>
            <p className="text-sm text-gray-500">Nome:</p>
            <h2 className="text-lg font-semibold text-gray-800">{firstName}</h2>
          </div>
          <div>
            <p className="text-sm text-gray-500">Sobrenome:</p>
            <h2 className="text-lg font-semibold text-gray-800">{lastName}</h2>
          </div>
          <div>
            <p className="text-sm text-gray-500">Idade:</p>
            <h2 className="text-lg font-semibold text-gray-800">{age} anos</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
