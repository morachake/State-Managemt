

useState

A react Hook lets you add a static variable to a component. It helps track of state in a function component
It takes a single parameter: an initial state which is the initial value of the state variable 
To use the UseState  Hook we first have to import it from React

    Import {useState} from 'react'

We destructure useState above as it is a named export
We then initialize our state by calling the useState in our function component

    const [state, setState] = useState(initialState);

in the example above:

    state - It is the current value of the state. it can be of any type example a string, number, object, array, etc
    setState - This is a function that can be used to update the state value.It takes a new state value as an argument and updates the state using the value

Here is an example of a simple counter using useState 

    import { useState } from 'react';
    
    function Example() {
      // Declare a new state variable, which we'll call "count"
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    

in the code above 
    1. The component is rendered for the first time with a state value of ’0’ as the initial value
    2. Once the user clicks on the button an onClick event handler is called which calls the setCount function, where  setCount has an updated state value of “count + 1 “ 
    3. the component re-renders with a state value of “1”
    4. if the user clicks the button again the setCount function is called with an updated value of “1 + 1” and re-renders with an updated value of “2” 
