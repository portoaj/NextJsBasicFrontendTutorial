interface BasicTodoListProps {
    todos: Record<string, boolean>;
}

export default function BasicTodoList({ todos }: BasicTodoListProps) {

    return (
        <>
            {Object.keys(todos).map((title, i) => {
                const isChecked = todos[title];

                return(<div key={i} className="flex items-center">
                    <input
                        type="checkbox"
                        className="w-5 h-5"
                        defaultChecked={isChecked}
                    />
                    <span className="ml-2">{i}</span>
                </div>);
            })}
        </>
    );
}