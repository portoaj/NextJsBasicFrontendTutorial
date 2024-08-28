import BasicTodoList from "@/components/BasicTodoList";

export default function BasicTodoListPage() {
    return (
        <>
            <h1>Basic Todo</h1>
            <BasicTodoList todos={{ "Learn React": true, "Learn TypeScript": true, "Learn Next.js": false, "Learn Frontend": true }} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio consequat, vel posuere arcu vulputate.
            </p>
        </>
    )
}