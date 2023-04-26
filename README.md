useState  

accepts initial state value
returns 2 things - getter and setter
any time if using prev state to set new state make sure to use the function version to set the state
settting state runs every time the component rerenders so use the function call to set initial state - useState(() => 3)
spread values so it can merge when using with arrays and objects

