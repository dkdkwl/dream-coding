import React, { useState } from 'react';
import './App.css';

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
      <div style={{position:'30px'}} className='pointer' />
    </div>
  );
}