import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked(prev => !prev);

  useEffect(() => {
      fetch(`data/${checked ? 'sale_': ''}products.json`)
        .then((res) => res.json())
        .then((data) => {
           console.log("뜨끈한 데이터를 받아옴", data);
          setProducts(data);
        });
        return () => {
          console.log("Products 컴포넌트가 화면에서 사라짐");
        }
  }, [checked]);
  return (
    <>
    <input id="checkbox" type="checkbox" name="" id="" value={checked} onChange={handleChange}/>
    <label htmlFor="checkbox">show only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}