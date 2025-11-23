import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AppJSX() {
  const name = '엘리';
  const list = ['우유','딸기','바나나','요거트','배']
  return (
    <>
      <h1>{`hello${name}`}</h1>
      <ul>
        {
          list.map(
              (item, index) =>
                (<li key={index}>{item}</li>
            )
          )
        }
      </ul>
    </>
  )
}

export default AppJSX
