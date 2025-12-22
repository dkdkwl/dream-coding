import React, { useEffect, useState } from 'react';

export default function Products() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked(prev => !prev);
    
  useEffect(() => {
      setIsLoading(true);//로딩 시작
      setError(undefined);
      fetch(`data/${checked ? 'sale_': ''}products.json`)
        .then(
          (res) => res.json(),
        )
        .then((data) => {
           console.log("뜨끈한 데이터를 받아옴", data);
          setProducts(data);
        }).catch(error => {
          console.error('Error:', error);
          setError('에러가 발생했습니다😥');
        }).finally(() => {
          setIsLoading(false);//로딩이 끝남
        });
        return () => {
          console.log("Products 컴포넌트가 화면에서 사라짐");
        }
  }, [checked]);

  if(isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; 
  return (
    <>
    <input id="checkbox" type="checkbox" name="" id="" value={checked} onChange={handleChange}/>
    <label htmlFor="checkbox">show only 🔥 Sale</label>
    {isLoading && <p>Loading... </p>}
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