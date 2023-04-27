import React, {useState, useMemo} from 'react'

function slowFunction(num){
    for (let i=0; i<=1000000000; i++){}
    return num*2
}

const Yetnew = () => {

    const [numbers, setNumbers] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumbers = useMemo(() => {
      return slowFunction(numbers)
    },[numbers])

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

  return (
    <div>

        <input type="number" value={numbers} onChange={(e) => setNumbers(+e.target.value)} />

        <button onClick={() => setDark(prev => !prev)}>Change Theme</button>

        <div style={themeStyles}>{doubleNumbers}</div>

    </div>
  )
}

export default Yetnew