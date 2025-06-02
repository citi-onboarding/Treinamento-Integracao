import UserCardList from "@/components/UserMap";
import Form from "@/components/AddUser";

export default function Home() {
  return (
    <div className="flex flex-1 flex-row h-full justify-around items-center bg-gray-500">
      <div className="flex flex-col justify-center items-center h-full w-2/5 ">
        <h1 className="text-3xl font-bold text-white mb-4">Adicionar usuário</h1>
        <Form />  
      </div>

      <div className="flex flex-1 flex-col justify-center items-center h-full">
        <h1 className="text-3xl font-bold text-white mb-4">Lista de usuários</h1>
        <UserCardList />
      </div>
    </div>
  );
}
