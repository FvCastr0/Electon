import styled from "styled-components";

const AuthInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
    font-family: 'Lato';
    font-weight: bold;
    margin-bottom: .2rem;
    line-height: 1.5rem;

    input {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      outline: none;
      font-size: 1.2rem;
      width: 23rem;
      padding: 7px;
      margin-bottom: 1.2rem;
    }

    label {
      position: absolute;
      margin-top: 13px;
      top: 0;
      left: 0;
      transition: all .3s ease-out;
    }

    input:focus + label,
    input:valid + label {
      border-color: ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.primaryColor};
      font-size: 14px;
      margin-top: -18px;
    }

    @media (max-width: 400px) {
      input {
        width: 17rem;
      }
    }
`

export default AuthInput;
