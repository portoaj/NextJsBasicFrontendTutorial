"use client";

import { useState } from "react";

interface StylizedTodoListProps {
    defaultTodos: Record<string, boolean>;
}

export default function StylizedTodoList({ defaultTodos }: StylizedTodoListProps) {
    const [todos, setTodos] = useState<Record<string, boolean>>(defaultTodos);

    function toggleTodo(todoTitle: string) {
        let newTodos = {...todos};
        newTodos[todoTitle] = !newTodos[todoTitle];
        setTodos(newTodos);
    }
    
    return (
        <div className="max-w-md mt-8 p-4 bg-white shadow-md rounded-lg">
            {/*Loop over the todos and render each one*/}
            {Object.keys(todos).map((title, i) => {
                const isChecked = todos[title];

                return (
                    <div key={i} className="flex items-center mb-2 last:mb-0">
                        <input
                            id={i.toString()}
                            type="checkbox"
                            className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                            defaultChecked={isChecked}
                            onClick={()=>{toggleTodo(title);}}
                        />
                        <label htmlFor={i.toString()} className={`ml-3 text-lg ${isChecked ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                            {title}
                        </label>
                    </div>
                );
            })}
        </div>
    );
}
