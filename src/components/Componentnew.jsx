import React, {useState, useRef} from 'react'

const Componentnew = () => {
    const [name, setName] = useState("")

    const inputRef = useRef()

  return (
    <div>
        <input ref={inputRef} type="text" value={name} onChange={e => setName(inputRef.current.value)} />
        <p>my name is {name}</p>
    </div>
  )
}

export default Componentnew