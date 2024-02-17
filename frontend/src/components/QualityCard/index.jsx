import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.article`
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  line-height: 1.7rem;
  color: ${({ theme }) => theme.colors.primaryColor};

  img {
    margin-right: 1.5rem;
  }

  h1 {
    font-weight: bold;
  }

  h2 {
    font-size: .9rem;
  }
  @media (max-width: 950px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    text-align: center;
  }
`

export default function QualityCard({ img, alt, title, description }) {
  return (
    <Card>
      <img src={img} alt={alt} />
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </Card>
  )
}

QualityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
