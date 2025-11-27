import React, { useState } from 'react';
import './App.css';

export default function AppXY() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    
  return (
    <div onMouseMove={console.log("123")} className='container'>
      <div className='pointer' />
    </div>
  );
}