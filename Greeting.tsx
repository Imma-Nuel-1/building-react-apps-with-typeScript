import React from "react";

// Step 1: Define an interface for the props to specify the type of the "name" prop
interface GreetingProps {
  name: string; // "name" is required and should be a string
}

// Step 2: Use TypeScript's type annotations for the props in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>; // TypeScript will now enforce that "name" is a string
};

export default Greeting;
