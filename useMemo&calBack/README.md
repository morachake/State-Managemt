What is Use Memo?

UseMemo is a React Hook that allows you to memoize a value. It can be used to improve a component's performance by avoiding unnecessary re-computation of values. Its first argument is a function that returns the value to be memoized, and its second argument is an array of dependencies. If one of the dependencies changes, the hook will only recompute the value.

If at least one of the dependencies has changed, the function passed to useMemo is called. If none of the dependencies have changed, the hook will return the previously rendered memoized value. This can be very useful for improving the performance of a component that performs costly calculations, such as deep object comparisons, mathematical calculations, or API calls.

It's also worth noting that useMemo doesn't change the behavior of the component; it simply improves its performance. It's not required, but it's a good idea to use it when you have a component that requires expensive computation and don't want to recompute it on every render.

It is critical to be aware of what you are memoizing and what dependencies you are passing, as passing too many or the incorrect dependencies can result in unexpected behavior. It's also critical to ensure that the value you're memoizing isn't a new object on every render, as this will prevent the previous and next states from being compared, resulting in unnecessary re-renders.

What is useCallBack ?

The React Hook useCallback allows you to memoize a callback function. It can be used to enhance a component's performance by avoiding the needless re-creation of callback functions. Its first argument is a callback function, and its second argument is an array of dependencies. The hook returns a memoized version of the callback function that changes only if one of the dependencies changes.

The main objective of useCallback is to avoid the unnecessary re-creation of callback functions. When a callback function is recreated, the component that depends on it must re-render, which can have a negative impact on performance. By using useCallback to memoize the callback function, the component only will re-render if the dependencies have changed.

Use useCallback to pass a callback function as a prop to a child component. If the parent component re-renders frequently and the child component doesn't have to re-render each time, this can be useful.
It is vital to be wary about the dependencies you pass to useCallback, as passing too many or the erroneous dependencies can result in unexpected behavior. It is also critical to ensure that the callback function does not create a new function on each render, as this will prevent the previous and next function from being matched, leading to unnecessary re-renders.