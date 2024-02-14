import styled from "styled-components";

const AuthCard = styled.form`
  padding: 2.5rem 7rem 3.8rem 7rem;
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.colors.mediumGray};
  text-align: center;
  border: 1px solid #575757;

  h1 {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
  }

  button {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      color: white;
      border: none;
      border-radius: .3rem;
      padding: .6rem 2rem;
      margin-top: 1.5rem;
      transition: all .3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      color: black;
    }
  }

  legend {
    font-family: 'Poppins', sans-serif;
    font-size: .8rem;
    text-align: left;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  @media (max-width: 650px) {
    background-color: white;
    border: none;
  }

`

export default AuthCard;
