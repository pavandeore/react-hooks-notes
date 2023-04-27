**useState**

accepts initial state value

returns 2 things - getter and setter

any time if using prev state to set new state make sure to use the function version to set the state

settting state runs every time the component rerenders so use the function call to set initial state - useState(() => 3)

spread values so it can merge when using with arrays and objects

----------

**useEffect**

for applying side effects to application

add dependency list in array so code will run only if it changes dependency

[] is onMount

return function from useEffect is clean up - remove event listeners here...


----------

**useMemo**

to cache value data in memory

don't use it everywhere it can cause performance overhead and memory overhead

to use wrap the return function call in useMemo and pass depency argument

use it as refrence equiality only wants to update component if the depency is changed



----------

**useRef**

when using ref it does not cause rerender on state update

Persist data between rerenders

can be useful to store previous value of state

