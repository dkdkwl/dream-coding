import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';
import styles from './assets/css/button2.module.css';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <div>
      {showProducts && <Products />}
      <button className={styles.button} onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}