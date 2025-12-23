import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';
import styles from './assets/css/button2.module.css';
import styled,{css} from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const Button = styled.button`
background:transparent;
border-radius:3px;
border:2px solid black;
color:black;
margin:0.5em 1em;
padding:0.25em 1em;
${(props)=>
    props.primary && css`
    background:black;
    color:white;
    `}
`

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <div>
      {showProducts && <Products />}
      <button className={styles.button} onClick={() => setShowProducts((show) => !show)}>Toggle</button>
      <Container>
        <Button primary>Toggle</Button>
      </Container>
    </div>
  );
}