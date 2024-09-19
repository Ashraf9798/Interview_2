// Why do we need React?
// What is React Element?
// What is JSX?
// What is unidirectional data flow?
// What is the concept of state in React?
// What is difference between useState and useRef?
// What is context api in React?

// Question 1

import React, { useState } from 'react'

export default function ClickCounter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => {
        setCount(count + 1)
        console.log(count)
      }}>Increment</button>
    </div>
  )
}
// -----------------
//// Question 2

import React, { useState, useRef } from 'react'

export default function ClickCounter() {
  const countRef = useRef(0)
  const [countState, setCountState] = useState(0)
  return (
    <div>
      <p>CountRef: {countRef.current}</p>
      <button onClick={() => countRef.current+= 1 }>Increment Ref</button>
      <p>CountState: {countState}</p>
      <button onClick={() => setCountState(countState + 1)}>Increment State</button>
    </div>
  )
}