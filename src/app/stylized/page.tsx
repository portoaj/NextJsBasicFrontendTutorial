import StylizedTodoList from "@/components/StylizedTodoList"

export default function StylizedTodoListPage() {
    return (
        <div className="min-h-screen bg-gray-100 items-center p-6">
            <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6">
                <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">Stylized Todo</h1>
                <StylizedTodoList defaultTodos={{ "Learn React": true, "Learn TypeScript": true, "Learn Next.js": false, "Learn Frontend": true }} />
                <p className="text-gray-700 text-base leading-relaxed mt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio consequat, vel posuere arcu vulputate.
                </p>
            </div>
        </div>
    )
};
