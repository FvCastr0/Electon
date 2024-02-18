import PropTypes from 'prop-types';
import styled from "styled-components";

const Card = styled.article`
  display: flex;
  max-width: 650px;
  font-family: 'Poppins';
  border: 1px solid #D4D4D4;
  border-radius: 1rem;
  padding: 2.5rem;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 4rem;

  img {
    border-radius: 1rem;
  }

  div {
    margin-left: 1.5rem;
  }

  legend {
    border: 1px solid;
    font-weight: bold;
    padding: 10px;
    width: 5.4rem;
    border-radius: 5rem;
    margin-bottom: 1.2rem;
  }

  h2 {
    font-weight: bold;
    font-size: 1.7rem;
    margin-right: .8rem;
    margin-bottom: 2rem;
    line-height: 2.2rem;
  }

  p {
    line-height: 1.3rem;
  }

  h3 {
    margin-top: 2rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    flex-direction: column;
    margin: 1rem;
    img {
      object-fit: contain;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 420px) {
    border: none;
    border-bottom: 1px solid #D4D4D4;
    padding: 0;
    padding-bottom: 2rem;
    h1 {
      margin-right: 0;
    }
  }
`

export default function NewsCard({ img, date, title, description, author }) {
  return (
    <Card>
      <img src={img} alt="news image" />
      <div>
        <legend>{date}</legend>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{author}</h3>
      </div>
    </Card>
  )
}

NewsCard.propTypes = {
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
