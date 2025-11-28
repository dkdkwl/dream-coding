import React, { useState } from 'react';
import './AppXY.css';
export default function AppXY() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  function handleMouseMove(event) {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
      console.log(mouseX,mouseY)
  }

return (
  <div onMouseMove={handleMouseMove} className='container'>
    <div style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }} className='pointer' />
  </div>
);
}