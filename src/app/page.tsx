import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Todo List Frontend Example</h1>
      
      <div className="space-y-4">
        <Link href="/basic" className="block text-lg text-blue-600 hover:text-blue-800 hover:underline">
          Basic Todo List
        </Link>
        <Link href="/stylized" className="block text-lg text-blue-600 hover:text-blue-800 hover:underline">
          Stylized Todo List
        </Link>
      </div>
    </div>
  );
}
