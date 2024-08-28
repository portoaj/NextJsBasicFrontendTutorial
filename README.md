This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating a basic todo list
Navigate to [http://localhost:3000/basic](http://localhost:3000/basic) to see the basic todo list.

There are two blocks of code that are relevant. The first block is the code for the actual page, this is located at src\app\basic\page.tsx.
The second block is the code for the BasicTodoList component referenced in the page, this is located at src\components\BasicTodoList.tsx.

Lets start with the page code:
```tsx
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
```
### HTML Basics
This page is a bit more complicated than a vanilla HTML page, because it uses Typescript and React, but the basic HTML structure is still there. The actual content of all webpages are constructed from HTML tags which are denoted by <TagName> and </TagName> with some content between the two tags(some tags are self closing I.E. <TagName/>). In this case, the h1 tag means that the content within it is the main *heading* of the page. The p tag is a *paragraph* tag, and just includes some example text. The most interesting tag is the BasicTodoList tag, which is a custom component that we have created using React.

### React Basics
Now lets look at the BasicTodoList component:
```tsx
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
```
There's a lot here so lets take it from the top. We first define a typescript interface called BasicTodoListProps which defines the props that the BasicTodoList component will take. In this case, it takes a single prop called todos which is a javascript object mapping strings to booleans, or more specifically, the names of each todo list item to whether they are checked. This means that the todos prop is an object where the keys are strings and the values are booleans.

Next we define the BasicTodoList component. We export it as the default export of this file so that we can import it from any page or component in which we want to use it. Notice how the input prop "todos" is given its type from the BasicTodoListProps interface we defined earlier.

Within the body of the component, we start by inclosing everything in a fragment tag <></> which wraps all of the elements within it. Next we use curly brackets ({}) to inject javascript within the TSX. We map through each of the different todo list items, and for each one we create a div tag with a checkbox and a span tag. The checkbox is a standard HTML input tag with type "checkbox" and the span tag is just a text element. The key prop is used to uniquely identify each element in the list. The defaultChecked prop is used to set the initial state of the checkbox to the value of the todo item in the todos object.
