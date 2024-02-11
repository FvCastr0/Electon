import { Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  margin-top: 3.2rem;
  font-family: 'Poppins';
  flex-wrap: wrap;

  article {
    margin: 1rem;
  }

  h1 {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 1.2rem;
    }

    article button {
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

    article a {
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

    div {
      display: grid;
      margin: 1rem;
      z-index: 0;
    }

    div legend {
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      justify-self: right;
      color: white;
      padding: 1.4rem;
      font-size: 1.2rem;
      border-radius: 4rem;
      transform: translate(25%, -180%);
    }

    @media (max-width: 650px) {
      margin-top: 0;

      article {
        margin: 0;
        width: 100%;
        background: rgb(0,0,0);
        background: linear-gradient(183deg, #000000a9 70%, #ffffff50 100%);
        padding-bottom: 40vh;
        z-index: 2;
        text-align: center;
      }

      article h1 {
        margin-top: 1.5rem;
        color: ${({ theme }) => theme.colors.mediumGray};
      }

      article a {
        color: ${({ theme }) => theme.colors.mediumGray};
        border-color: ${({ theme }) => theme.colors.mediumGray};
      }

      div {
        position: absolute;
      }
    }
`

export default function Header() {
  return (
    <HeaderStyled>
      <article>
        <h1>Canon <br />camera</h1>
        <button>Add to cart</button>
        <Link to="/">View more</Link>
      </article>

      <div>
        <img src="/headerCam.png" alt="Canon cam" />
        <legend>only<br />$88</legend>
      </div>

    </HeaderStyled>
  )
}
