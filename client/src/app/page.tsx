import UserForm from "@/components/Form";
import UserTable from "@/components/Table";

export default async function UsersPage() {
  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Gerenciamento de Usuários 🧑‍💻
      </h1>
      <UserForm />
      <hr className="my-8" />
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Lista de Usuários 📋
      </h2>
      <UserTable />
    </div>
  );
}