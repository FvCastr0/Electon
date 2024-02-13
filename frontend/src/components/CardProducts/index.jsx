import PropTypes from 'prop-types';
import { FaEye } from "react-icons/fa";
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Card = styled.article`
  width: 100%;
  max-width: 300px;
  border: 1px solid #A5A5A5;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 1.5rem;
  height: 250px;

  img {
    margin-top: 1.2rem;
    width: 150px;
    max-height: 150px;
    align-self: center;
    object-fit: cover;
  }

  article {
    line-height: 1.8rem;
    margin-top: .5rem;
    margin-bottom: 0;
    margin-left: 1.2rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: 'Lato';
    font-weight: bold;
    font-size: 1.5rem;
  }

  legend {
    font-family: 'Poppins';
    font-size: 1.1rem;
  }

  div {
    display: none;
    margin-top: .7rem;
    margin-left: .3rem;
    justify-content: space-around;
    align-items: center;
    margin-top: auto;
    padding-bottom: .8rem;
  }

  div a {
    margin-left: .8rem;
    width: 50px;
    text-align: center;
  }

  div a,
  div button {
    color: #2b2b2b;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    padding: 1rem 0;
    border-radius: 1rem;
    cursor: pointer;
  }

  div button {
    border: none;
    font-family: 'Lato';
    font-weight: bold;
    color: #000;
    font-size: 1.1rem;
    align-self: center;
    padding-left: .95rem;
  }

  div button span {
    margin-left: 2.2rem;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    padding: .8rem;
    border-radius: 1rem;
    color: white;
  }

  &:hover {
    article {
      display: none;
    }

    div {
      display: flex;
    }
  }

  @media (max-width: 768px) {
    height: 290px;
    &:hover {
    article {
      display: block;
    }

    div {
      display: flex;
    }
  }
    div {
      display: flex;
    }
  }
`

export default function CardProduct({ name, price, id, img }) {
  return (
    <Card>
      <img src={img} alt={name} />
      <article>
        <h2>{name}</h2>
        <legend>${price}</legend>
      </article>

      <div>
        <button>Add to cart <span><IoCartOutline /></span></button>
        <Link to={`/products/${id}`}><FaEye /></Link>
      </div>
    </Card>
  )
}


CardProduct.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
