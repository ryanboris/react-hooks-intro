import React, { useState } from 'react'

const AppFunc = props => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  const delayCount = () => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
  }

  return (
    <>
      <button onClick={incrementCount}>Clicked {count}</button>
      {count > 0 && <button onClick={decrementCount}>-1</button>}
      <button onClick={resetCount}>Reset</button>
      <button onClick={delayCount}>Delay +1</button>
    </>
  )
}

export default AppFunc
