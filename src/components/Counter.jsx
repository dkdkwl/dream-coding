import React, { useState } from 'react'

export default function Counter({total, onClick}) {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(prev=>prev + 1);
        onClick();
    }
  return (
    <div className='counter'>
        <span className='number'>{count} / {total}</span>
        <button className='button' onClick={handleClick}>add +</button>
    </div>
  )

}
