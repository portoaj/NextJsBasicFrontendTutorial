This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Once you've downloaded/ cloned the project to your machine open it up your IDE of choice, we recommend VSCode. Make sure you have a recent version of Node.js installed on your machine. You can download it [here](https://nodejs.org/en/) or even better use a tool like [nvm](https://github.com/nvm-sh/nvm) to manage different versions of node for different projects.

To install the project dependencies, run:

```bash
npm install
```

Then you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating a basic todo list
Navigate to [http://localhost:3000/basic](http://localhost:3000/basic) to see the basic todo list.

There are two blocks of code that are relevant. The first block is the code for the actual page, this is located at src\app\basic\page.tsx.
The second block is the code for the BasicTodoList component referenced in the page, this is located at src\components\BasicTodoList.tsx.

Lets start with the page code for a simple Todo list:
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

Within the body of the component, we start by enclosing everything in a fragment tag <></> which wraps all of the elements within it. Next we use curly brackets ({}) to inject javascript within the TSX. We map through each of the different todo list items, and for each one we create a div tag with a checkbox and a span tag. The checkbox is a standard HTML input tag with type "checkbox" and the span tag is just a text element. The key prop is used to uniquely identify each element in the list. The defaultChecked prop is used to set the initial state of the checkbox to the value of the todo item in the todos object.

### TailwindCSS Basics
You might notice the className attributes in the div, input, and span tags. These are used to apply CSS classes to the elements which style the elements in different ways, such as changing their size, color, or centering. Instead of writing CSS directly, here we are using premade CSS classes from Tailwind CSS. In your IDE, you might be able to hover over the classNames to see the actual CSS that is being applied. For example, the w-5 class sets the width of the element to 5 units of 4 pixels: .w-5 {
    width: 1.25rem /* 20px */;
}. 
I encourage you to explore the  [Tailwind CSS website](https://tailwindcss.com/docs) to see all of the different classes/ utilities that are available.


## Creating a Stylized Todo List
This basic Todo list is functional, but it could clearly be a lot nicer and more interactive. This is where the StylizedTodoList comes in.

Navigate to http://localhost:3000/stylized to see the stylized todo list.

Similar to the basic todo list, there are two main blocks of code that are relevant here. The first block is the code for the page itself, which is located at src\app\stylized\page.tsx. The second block is the code for the StylizedTodoList component, which is referenced on the page and is located at src\components\StylizedTodoList.tsx.

### Page Code Overview
Let's start with the code for the page:

```tsx
import StylizedTodoList from "@/components/StylizedTodoList"

export default function StylizedTodoListPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
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
```
This code is slightly more complex than the basic todo list page, as it includes some additional styling to create a more visually appealing interface.

### Layout and Styling
The outer div uses Tailwind CSS classes to create a full-height screen with a light gray background. The page content is centered both vertically and horizontally using Flexbox (flex, items-center, justify-center), and padding is added for spacing (p-6).

Within this outer container, another div wraps the todo list and additional content. This container is styled with a white background, shadow, rounded corners, and padding to make it stand out as a card (bg-white, shadow-md, rounded-lg, p-6). The heading (h1) is centered, bold, and has a large font size to serve as the title of the page.

### StylizedTodoList Component
Now let's look at the StylizedTodoList component:

```tsx
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
```
### Use Client
At the top of this file, you'll notice the line "use client". This is a special comment that tells the compiler that this component should be rendered on the client side only, and not the server. This means that we can use things like window and document that only appear in the browswer in this component. In particular, we need it to use OnClick events.

### React State Management
This component uses React's useState hook to manage the state of the todo list. It returns a variable called todos that holds the state of the current todos, as well as a setTodos function to update that state which is used by the toggleTodo helper function. Notice that the defaultTodos prop is passed in as the initial state and that the type is specified within <>.

### TSX and TailwindCSS
The div wrapping the todo list items is styled similarly to the page container, with classes that create a card-like appearance. Each todo item is rendered inside a div with flexbox layout for alignment.

The input element (checkbox) has additional Tailwind classes for styling, including a blue color when checked (text-blue-500), rounded corners (rounded), and a border color (border-gray-300). The focus
class adds a blue ring around the checkbox when it is focused.

The label element dynamically changes its styling based on whether the todo item is checked. If the checkbox is checked, the text is styled with a strikethrough (line-through) and a gray color (text-gray-500). If not, the text remains a darker gray (text-gray-800). This is achieved using a ternary operator (the ? and : syntax) to conditionally render different classes based on the value of isChecked.

### Interactive Behavior
The checkbox's onClick event triggers the toggleTodo function, which updates the state of the todos object. Whenever the todos object is changed, the body of the component gets rerendered since the state has changed. The label element's text and style change based on this state.

## Creating the layout

You might notice that all of the pages have a header and a footer. This layout comes from src/app/layout.tsx. This file has a layout that gets applied to all of the child pages. This is a pretty common and important pattern.

Here's the code for the layout:
```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-Do List",
  description: "A simple and elegant to-do list application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <header className="w-full py-4 bg-blue-500 text-white flex justify-between items-center px-6">
            <div className="flex items-center">
              <nav>
                <Link href="/" className="flex text-center">
                  {/* Example logo */}
                  <div className="w-10 h-10 bg-white rounded-full"></div>{" "}
                  <h1 className="ml-4 text-xl font-bold">My To-Do List</h1>
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1 w-full max-w-3xl mx-auto bg-white rounded-lg">
            {children}
          </main>
          <footer className="w-full py-4 bg-gray-800 text-white text-center">
            <p>&copy; 2024 Basic To-Do List App - UCSD CSES</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
```

### Nested Components
Most of the code in this layout should be pretty recognizable by now with the possible exception of some of the HTML elements like header, nav and footer. Most of these tags don't actually affect the visuals of the webpage but help to organize the code and also help screen readers for people with accessibility issues.

The interesting thing in this example is the use of a generic nested component, in this case called children. As you can see it's passed into the RootLayout component as a prop and then rendered in the main tag. This is a common pattern in React where you can pass in a component as a prop and then render it within the component by wrapping the component prop in curly brackets ({}). This is a powerful pattern that allows you to create reusable components that can be customized by passing in other components as props.