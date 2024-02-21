import { FaFacebook, FaGoogle, FaHeadset, FaRegPaperPlane, FaWhatsapp } from "react-icons/fa";
import { styled } from 'styled-components';


const StyledFooter = styled.footer`
  background-color: #E2F4FF;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 3rem 8rem;
`

const Newsletter = styled.article`
  grid-column-start: 1;
  grid-column-end: 6;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 2rem;
  justify-content: space-around;
  margin-bottom: 4rem;
  border-radius: 1rem;
  font-family: 'Poppins';

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  article {
    display: flex;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    align-items: center;
    border-radius: 1rem;
  }

  article input {
    background-color: transparent;
    border: none;
    font-size: 1.05rem;
    padding: 1rem;
    color: #FFF;
    padding-right: 16rem;
    font-family: 'Poppins';
    outline: none;

  }

  article input[type="text"]::placeholder {
    color: #FFF;
  }

  article button {
    background-color: transparent;
    border: none;
    color: #FFF;
    font-size: 1.6rem;
    margin-right: 2rem;
  }

  p {
    line-height: 1rem;
    color: #606060;
    font-weight: bold;
    font-size: .9rem;
  }
`

const Infos = styled.div`

`

const Topic = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2rem;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Newsletter>
        <h1>Subscribe newsletter</h1>
        <article>
          <input type="text" placeholder="Email address" />
          <button><FaRegPaperPlane /></button>
        </article>
        <div>
          <FaHeadset />
          <p>Call us 24/7 : <br />
            (+62) 0123 567 789</p>
        </div>
      </Newsletter>


      <Infos>
        <img src="/minLogo.png" alt="logo" />
        <legend>64 st james boulevard
          hoswick , ze2 7zj</legend>
        <div>
          <FaGoogle />
          <FaFacebook />
          <FaWhatsapp />
        </div>
      </Infos>

      <Topic>
        <h1>Find product</h1>
        <a>Brownze arnold</a>
        <a>Chronograph blue</a>
        <a>Smart phones</a>
        <a>Automatic watch</a>
        <a>Hair straighteners</a>
      </Topic>

      <Topic>
        <h1>Get help</h1>
        <a>About us</a>
        <a>Contact us</a>
        <a>Return policy</a>
        <a>Privacy policy</a>
        <a>Payment policy</a>
      </Topic>

      <Topic>
        <h1>About us</h1>
        <a>News</a>
        <a>Service</a>
        <a>Our policy</a>
        <a>Custmer care</a>
        <a>Faq’s</a>
      </Topic>

    </StyledFooter>
  )
}
