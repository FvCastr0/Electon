import { FaFacebook, FaGoogle, FaHeadset, FaRegPaperPlane, FaWhatsapp } from "react-icons/fa";
import { styled } from 'styled-components';


const StyledFooter = styled.footer`
  background-color: #E2F4FF;
  padding: 3rem 8rem;
  @media (max-width: 870px) {
    padding: 3rem 0;
  }
`

const Newsletter = styled.article`
  grid-column-start: 1;
  grid-column-end: 6;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  padding: 2rem;
  justify-content: space-around;
  margin-bottom: 4rem;
  border-radius: 1rem;
  font-family: 'Poppins';

  @media (max-width: 420px) {
      padding: 2rem 0;
    }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin: 1rem;
    @media (max-width: 420px) {
      text-align: center;
      margin: 0;
    }
  }

  div {
    display: flex;
    margin: 1rem;
  }

  .headsetIcon {
    color: ${({ theme }) => theme.colors.secondaryColor};
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1rem;
  }

  article {
    display: flex;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    align-items: center;
    border-radius: 1rem;
    margin: 1rem;
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
    @media (max-width: 600px) {
      padding-right: 6rem;
    }

    @media (max-width: 420px) {
      padding-right: 0;
    }
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
    @media (max-width: 420px) {
      margin-right: .5rem;
    }
  }

  p {
    line-height: 1rem;
    color: #606060;
    font-weight: bold;
    font-size: .9rem;
  }
`

const Infos = styled.div`
  legend {
    margin: 2rem 0;
    border-bottom: 1px solid #b9b9b9;
    padding-bottom: 3rem;
    width: 110%;
  }

  div {
    color: #2b2b2b;
  }

  div .icons {
    margin-right: 3rem;
    width: 1.4rem;
    height: 1.4rem;
  }
`

const Topics = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: 'Poppins';
`

const Topic = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2.4rem;
  margin: 1rem;

  ul {
    list-style-type: disc;
    transform: translateX(1.2rem);
  }

  h1 {
    font-size: 1.7rem;
    font-weight: bold;
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
          <FaHeadset className="headsetIcon" />
          <p>Call us 24/7 : <br />
            (+62) 0123 567 789</p>
        </div>
      </Newsletter>

      <Topics>
        <Infos>
          <img src="/minLogo.png" alt="logo" />
          <legend>64 st james boulevard<br />
            hoswick , ze2 7zj</legend>
          <div>
            <FaGoogle className="icons" />
            <FaFacebook className="icons" />
            <FaWhatsapp className="icons" />
          </div>
        </Infos>

        <Topic>
          <h1>Find product</h1>
          <ul>
            <li>Brownze arnold</li>
            <li>Chronograph blue</li>
            <li>Smart phones</li>
            <li>Automatic watch</li>
            <li>Hair straighteners</li>
          </ul>
        </Topic>

        <Topic>
          <h1>Get help</h1>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Return policy</li>
            <li>Privacy policy</li>
            <li>Payment policy</li>
          </ul>
        </Topic>

        <Topic>
          <h1>About us</h1>
          <ul>
            <li>News</li>
            <li>Service</li>
            <li>Our policy</li>
            <li>Custmer care</li>
            <li>Faq’s</li>
          </ul>
        </Topic>
      </Topics>

    </StyledFooter>
  )
}
