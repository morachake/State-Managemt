# State Management in React and ReactNative apps

# managing state in React using Redux, context API...

In React, state refers to a component's internal data. State management is the process of managing the state of a component used to store data that can be used to determine the output of the component. The state can be changed by interacting with the component, such as by clicking a button or filling out a form.*
 *There are several types of state that you may need to manage in a React app. These include:*
 
***Local state:*** *This refers to the state that is specific to a single component and is not shared with other components. Local state is often used to store data that is only relevant to the component and does not need to be accessed by other parts of the app.*

***Global state:*** *is often used to refer to the application state that is shared across multiple components. This type of state is typically stored in a central location, such as a store using a library like Redux, and is accessed by all components that need it.*

*In general, it's a good idea to try to minimize the amount of global state in your app, as too much global state can make it difficult to understand the relationships between different parts of your app and can make it harder to maintain and test your code. Instead, it's often better to try to encapsulate the state as locally as possible, and only lift the state to a global level when it is truly needed by multiple components.*
*That being said, certain types of data are naturally global and are therefore well-suited to being stored in a global state. Examples might include the currently logged-in user, the current theme, or the language preference for the app.*

**S*****erver state*** *refers to data that is stored on a server and is used to manage the behavior of the app. This data is typically accessed by the client (the React app) through API calls or other forms of communication with the server.*
*React apps can use server state in a variety of ways. For example, a React app might use server state to:*

1. *Store user data such as login information and profile details*
2. *Persist application data such as settings or preferences*
3. *Enforce security rules and policies around access to data and functionality*
4. *Store data that is too large or complex to be stored in the client-side app (such as a large dataset that is being used to populate a chart or other visualization)*

*It's important to carefully consider how you will manage the server state in your React app, as the way you choose to store and access data on the server can have a significant impact on the overall performance and architecture of your app.*

***URL state*** *refers to data that is stored in the URL (Uniform Resource Locator) and is used to determine the behavior of the app. This can include data such as the current page being viewed, search parameters, or other types of data that are needed to support the functionality of the app.*

*URL state is important because it allows users to bookmark or share specific pages or views within an app, and it allows the app to maintain its state even if the page is refreshed or the app is closed and reopened.*

*In a React app, the URL state is typically managed using the* ***useParams*** *hook in conjunction with the* ***useHistory*** *hook from the react-router-dom library.

 The ***useParams*** *hook allows you to access the parameters that are passed in the URL, while the* ***useHistory*** *hook allows you to update the URL by pushing new entries onto the history stack.*

*By using these tools, you can create React apps that support deep linking (linking to specific pages or views within the app) and that maintain their state when the URL changes.*


## *There are a few different ways to manage state in a React application:*

*Class-based components have a state property that stores data that determines the output of the component. The State property is initialized in the constructor and can be modified using the* ***setState()*** *method, which triggers a re-render of the component to reflect the updated state.*

*The* ***useState*** *hook allows functional components to have stated. It takes an initial state value as an argument and returns an array with the current state value and a function to update it.*

*State management libraries like* ***Redux*** *or* ***MobX*** *provide a global store for managing the state and offer tools for updating and retrieving the state from the store.*
*State can be passed down through props from a higher-level component to a lower-level component that needs access to it.*


# 
# useState

A react Hook lets you add a static variable to a component. It helps track of state in a function component
It takes a single parameter: an initial state which is the initial value of the state variable 
To use the UseState  Hook we first have to import it from React

    Import {useState} from 'react'

We destructure useState above as it is a named export
We then initialize our state by calling the useState in our function component

    const [state, setState] = useState(initialState);

in the example above:

    *state - It is the current value of the state. it can be of any type example a string, number, object, array, etc*
    setState - This is a function that can be used to update the state value.It takes a new state value as an argument and updates the state using the value

Here is an example of a simple counter using useState 

        
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
    

in the code above :

    1. The component is rendered for the first time with a state value of ’0’ as the initial value
    2. Once the user clicks on the button an onClick event handler is called which calls the setCount function, where  setCount has an updated state value of “count + 1 “ 
    3. the component re-renders with a state value of “1”
    4. if the user clicks the button again the setCount function is called with an updated value of “1 + 1” and re-renders with an updated value of “2” 





# 
# *Use Reducer*
# What is useReducer?
*It's a ReactHook that lets you add a Reducer to your component. It allows for custom state logic.*
*It's useful when trying to keep track of multiple pieces that rely on complex logic*
*Import the* ***useReducer*** *from React to use it in your component*

        import {useReducer} from 'react

*The useReducer Hook accepts two parameters : a reducer function and the initial state*

    i.e    useReducer(<reducer>,<initialState>)

 **   *where the* 
       *- reducer takes two arguments, State and action, It must be a pure function and returns the next state.*
       *- the initial state can be an object or a primitive value from which the initial state is calculated. It is called every time an action is dispatched*
*The useReducer returns an array of two values*
        *the current state and a dispatch function that is used to update the state to a different value and Trigger a re-render*
*The dispatch function returned by useReducer is used to update the state to a different value and trigger a re-render.*
*An Action is an object dispatched to the reducer function. It has a type property indicating the type of* 
*action  to be performed or data to update the state*
    *example:*
        **

                  const [state,dispatch]= useReducer(reducer,{books:"23"});
                    function AddName(){
                        dispatch({type:"INCRIMENT_BOOKS"
    })  }

 **       *in the above Example code:*
        *the useReducer hook is being passed a reducer function called reducer, and an initial state object*
        *books with  23 as an initial value. The hook returns an array with the current state and a dispatch method, destructured into the variables state and dispatch.*
        *The INCRIMENT_BOOKS function is then defined and dispatches an action to the reducer by calling the dispatch method with an object with a type property. The reducer function will receive this action and update the state accordingly by incrementing the value of books.*

# useMemo

# *What is Use Memo?*

UseMemo is a React Hook that allows you to memoize a value. It can be used to improve a component's performance by avoiding unnecessary re-computation of values. Its first argument is a function that returns the value to be memoized, and its second argument is an array of dependencies. If one of the dependencies changes, the hook will only recompute the value.

If at least one of the dependencies has changed, the function passed to useMemo is called. If none of the dependencies have changed, the hook will return the previously rendered memoized value. This can be very useful for improving the performance of a component that performs costly calculations, such as deep object comparisons, mathematical calculations, or API calls.

It's also worth noting that useMemo doesn't change the behavior of the component; it simply improves its performance. It's not required, but it's a good idea to use it when you have a component that requires expensive computation and don't want to recompute it on every render.

It is critical to be aware of what you are memoizing and what dependencies you are passing, as passing too many or the incorrect dependencies can result in unexpected behavior. It's also critical to ensure that the value you're memoizing isn't a new object on every render, as this will prevent the previous and next states from being compared, resulting in unnecessary re-renders.

# useCallback
# *What is useCallBack ?*

The React Hook useCallback allows you to memoize a callback function. It can be used to enhance a component's performance by avoiding the needless re-creation of callback functions. Its first argument is a callback function, and its second argument is an array of dependencies. The hook returns a memoized version of the callback function that changes only if one of the dependencies changes.

The main objective of useCallback is to avoid the unnecessary re-creation of callback functions. When a callback function is recreated, the component that depends on it must re-render, which can have a negative impact on performance. By using useCallback to memoize the callback function, the component only will re-render if the dependencies have changed.

Use useCallback to pass a callback function as a prop to a child component. If the parent component re-renders frequently and the child component doesn't have to re-render each time, this can be useful.
It is vital to be wary about the dependencies you pass to useCallback, as passing too many or the erroneous dependencies can result in unexpected behavior. It is also critical to ensure that the callback function does not create a new function on each render, as this will prevent the previous and next function from being matched, leading to unnecessary re-renders.
