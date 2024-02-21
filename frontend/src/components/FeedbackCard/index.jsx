import PropTypes from 'prop-types';
import styled from "styled-components";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  font-family: 'Poppins';
  border: 1px solid #BABABA;
  border-radius: 1.5rem;
  padding: 1rem;
  margin: 1rem .8rem;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
  }

  img {
    border: 3px dashed;
    border-color: ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 6rem
  }

  h1 {
    margin-left: 2rem;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bold;
  }

  p {
    background-color: #E2F4FF;
    font-size: .9rem;
    margin: 0 .5rem;
    padding: 1.2rem;
    border-radius: 1rem;
  }

  @media (max-width: 1050px) {
    max-width: 370px;
  }
`

export default function FeedbackCard({ img, alt, title, description }) {
  return (
    <Card>
      <div>
        <img src={img} alt={alt} />
        <h1>{title}</h1>
      </div>
      <p>{description}</p>
    </Card>
  )
}

FeedbackCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
