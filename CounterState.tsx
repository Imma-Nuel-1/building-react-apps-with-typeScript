import React, { Component } from "react";

// Step 1: Define an interface for the state
interface CounterState {
  count: number; // "count" is a number
}

// Step 2: Define the component as a class with proper types for props and state
class Counter extends Component<{}, CounterState> {
  // Step 3: Initialize the state with type annotations
  state: CounterState = {
    count: 0, // Default count is set to 0
  };

  // Step 4: Type the increment method and ensure setState is properly typed
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 5: Ensure render method returns JSX and respects state types
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
