import { Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  font-family: 'Poppins';
  flex-wrap: wrap;
  margin-bottom: 2.5rem;

`

const Title = styled.article`
    margin: 5rem 0;

  h1 {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 1.2rem;
    }

    button {
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      border: none;
      border-radius: 8px;
      padding: 1rem 1rem;
      color: #FFF;
      cursor: pointer;
      font-family: 'Poppins';
      margin-right:  2.5rem;
      font-size: 1.05rem;
    }

    a {
      text-decoration: none;
      background-color: transparent;
      border: 1px solid;
      border-radius: 8px;
      font-size: 1.1rem;
      padding: .86rem 1rem;
      color: ${({ theme }) => theme.colors.primaryColor};
      border-color: ${({ theme }) => theme.colors.primaryColor};
      cursor: pointer;
      font-family: 'Poppins';
    }

    @media (max-width: 650px) {
      margin: 0;
      width: 100%;
      background: rgb(0,0,0);
      background: linear-gradient(183deg, #000000a9 70%, #ffffff50 100%);
      padding-bottom: 40vh;
      z-index: 2;
      text-align: center;

      h1 {
        margin-top: 1.5rem;
        color: ${({ theme }) => theme.colors.mediumGray};
      }

      a {
        color: ${({ theme }) => theme.colors.mediumGray};
        border-color: ${({ theme }) => theme.colors.mediumGray};
      }
    }
`

const Image = styled.div`
      display: grid;
      margin: 1rem;
      z-index: 0;

    legend {
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      justify-self: right;
      color: white;
      padding: 1.4rem;
      font-size: 1.2rem;
      border-radius: 4rem;
      transform: translate(25%, -180%);
    }

    @media (max-width: 650px) {
      position: absolute;

      legend {
        display: none;
      }
    }

`

const ProductCategory = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Product = styled.article`
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid;
  border-color: #A5A5A5;
  border-radius: 1rem;

  padding: .4rem 3rem;
  width: 250px;
  max-width: 300px;
  margin: 0 .5rem;
  margin-top: 2rem;

    div {
      white-space: nowrap;
      margin-left: 2rem;
      font-size: 1.1rem;
      font-family: 'Poppins';
      line-height: 1.6rem;
      color: ${({ theme }) => theme.colors.primaryColor};

      @media (max-width: 400px) {
        white-space: wrap;
      }
    }

  img {
    width: auto;
    max-width: 150px;
  }
`

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Title>
          <h1>Canon <br />camera</h1>
          <button>Add to cart</button>
          <Link to="/">View more</Link>
        </Title>

        <Image>
          <img src="/headerCam.png" alt="Canon cam" />
          <legend>only<br />$88</legend>
        </Image>

      </HeaderStyled>

      <ProductCategory>

        <Product>
          <img src="/productHeader/speaker.png" alt="Speaker" />
          <div>
            <h1>Speaker</h1>
            <legend>(6 items)</legend>
          </div>
        </Product>

        <Product>
          <img src="/productHeader/laptop.png" alt="Desktop and laptop" />
          <div>
            <h1>Desktop & laptop</h1>
            <legend>(6 items)</legend>
          </div>
        </Product>

        <Product>
          <img src="/productHeader/camera.png" alt="Camera" />
          <div>
            <h1>DSLR Camera</h1>
            <legend>(6 items)</legend>
          </div>
        </Product>

      </ProductCategory>
    </>
  )
}
