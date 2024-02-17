import { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardProduct from '../components/CardProducts'
import FeedbackCard from '../components/FeedbackCard'
import Header from '../components/Header'
import QualityCard from '../components/QualityCard'
import api from '../http/index'

const ProductTitle = styled.main`
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: 'Poppins';
    font-size: 1.7rem;
    font-weight: 600;
    margin: 6rem 0 2rem 8rem;

    @media (max-width: 650px) {
      margin: 6rem 0 2rem 0;
      text-align: center;
    }
`

const Products = styled.main`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 4em;
  justify-content: center;

`

const Laptop = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 4rem 0;

  .laptopG {
    border-radius: 1rem;
    max-width: 100%;
    display: block;
    height: auto;
    margin: 0 4rem;
  }

  .laptopM {
    display: none;
    border-radius: 1rem;
  }


  article {
    position: absolute;
    left: 60%;
    text-align: center;
    color: white;
  }

  article a {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    border: none;
    font-family: 'Poppins', sans-serif;
    color: white;
    padding: 0.4rem 1.5rem;
    border-radius: 1rem;
    font-size: 1.05rem;
  }

  article h1 {
    color: #2E8FC5;
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 1rem;
    margin-top: 3rem;
  }

  article legend {
    color: white;
    font-family: 'Lato';
    font-size: 1.4eerem;
    margin-bottom: 4rem;
  }

  @media (max-width: 1100px) {
    .laptopG {
    display: none;
  }

  .laptopM {
    display: block;
  }
}

  @media (max-width: 1250px) {
    article {
    left: 45%;
  }
  }

  @media (max-width: 750px) {
    height: 100vh;
    display: flex;
    alignm-content: center;
    margin-top: 4rem;

    .laptopM {
    display: none;
  }

  article {
    position: absolute;
    left: 0;
    width: 100%;
    transform: none;
    background-color: #000000ba;
    height: 88%;
    z-index: 4;
  }

  article div {
    transform: translateY(7rem);
  }

  .laptopS {
    background-image: url('/laptopS.png');
    width: 100%;
    height: 88%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
  }
`
const Qualities = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #92D5FF;
  margin: 3rem 4rem;
  padding: 2rem;
  border-radius: 1rem;

  @media (max-width: 400px) {
    margin: 3rem 2rem;
  }
`
const Feedback = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 6rem;
  flex-wrap: wrap;
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

      <Laptop>
        <img src="/laptopG.png" alt="laptop" className='laptopG' />
        <img src="/laptopM.png" alt="laptop" className='laptopM' />
        <div className='laptopS' />

        <article>
          <div>
            <a>New laptop</a>
            <h1>Sale up to 50% off</h1>
            <legend>12 inch display</legend>
            <a>Shop now</a>

          </div>
        </article>
      </Laptop>

      <Qualities>

        <QualityCard
          img='/box-tick.svg'
          alt='box icon quality'
          title='Free delivery'
          description='on order above $50.00'
        />

        <QualityCard
          img='/crown.svg'
          alt='crown icon quality'
          title='Best quallity'
          description='best quality in low price'
        />

        <QualityCard
          img='/shield-security.svg'
          alt='shield security icon quality'
          title='1 year warranty'
          description='available warranty'
        />
      </Qualities>

      <Feedback>
        <FeedbackCard
          alt='person of feedback'
          img='/people/person1.png'
          title='Savannah Nguyen'
          description='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper.
          Phasellus tristique aenean at lorem sed scelerisque.'
        />

        <FeedbackCard
          alt='person of feedback'
          img='/people/person2.png'
          title='Esther Howard'
          description='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper.
          Phasellus tristique aenean at lorem sed scelerisque.'
        />

        <FeedbackCard
          alt='person of feedback'
          img='/people/person3.png'
          title='Esther Howard'
          description='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper.
          Phasellus tristique aenean at lorem sed scelerisque.'
        />
      </Feedback>

    </>
  )
}
