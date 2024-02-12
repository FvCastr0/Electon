import { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardProduct from '../components/CardProducts'
import Header from '../components/Header'
import api from '../http/index'

const ProductTitle = styled.main`
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: 'Poppins';
    font-size: 1.7rem;
    font-weight: 600;
    margin: 6rem 0 2rem 8rem;
`

const Products = styled.main`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 4em;
  justify-content: center;

`

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/api/product')
      .then(res => {
        setProducts(res.data.data)
      })
      .catch(e => {
        console.log(e);
      })
  }, [])


  return (
    <>
      <Header />
      <ProductTitle>Popular products</ProductTitle>
      <Products>
        {
          products.map((product) => {
            return (
              <CardProduct
                key={product._id}
                name={product.name}
                price={`${product.price}`}
                id={product._id}
                img={product.img}
              />)
          })
        }
      </Products>
    </>
  )
}
