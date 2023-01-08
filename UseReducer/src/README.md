
# 
# *Use Reducer*

*It's a ReactHook that lets you add a Reducer to your component. It allows for custom state logic.*
*It's useful when trying to keep track of multiple pieces that rely on complex logic*
*Import the* ***useReducer*** *from React to use it in your component*

        import {useReducer} from 'react

*The useReducer Hook acceps two parameters : a reducer function and the initial state*

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

