React TypeScript Component Conversion Project
Project Overview
This project demonstrates the conversion of two React components from JavaScript to TypeScript. The main focus is on ensuring type safety by explicitly defining props and state, making the components more maintainable and less error-prone.
Components
1. Greeting Component
This component displays a greeting message based on the name prop.

Original JavaScript: The component was written without specifying the type of the name prop.
Converted TypeScript: The name prop is now strictly typed as a string using TypeScript's interface.
2. Counter Component
This class-based component tracks and increments a count state.

Original JavaScript: The count state was implicitly typed.
Converted TypeScript: The state is now explicitly typed using a CounterState interface, ensuring that count remains a number.

Technologies Used
React: JavaScript library for building user interfaces.
TypeScript: A statically typed superset of JavaScript that enhances code quality.
Node.js: For running and building the project.
TypeScript Conversion Summary
Greeting Component: Converted the name prop to be explicitly typed as string using an interface.
Counter Component: Converted the count state to be explicitly typed as number using a CounterState interface.
