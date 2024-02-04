import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 3fr auto;
  padding: 2rem 4rem;
  gap: 1rem;

  img {
    margin-left: 5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 850px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 440px) {
    padding: 1rem 2rem;
  }
`

const Search = styled.article`
display: flex;
text-align: center;
  input {
    padding: .7rem 4rem .8rem 2rem;
    color: ${({ theme }) => theme.colors.black};
    outline: none;
    border-radius: .8rem;
    border: none;
  }

  button {
    padding: 1rem 1.5rem;
    border-radius: .8rem;
    transform: translateX(-23%);
    border: none;
    border-color: ${({ theme }) => theme.colors.secondaryColor};
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }

  @media (max-width: 550px) {
    button {
      padding: .7rem 1.2rem;
    }
  }

  @media (max-width: 380px) {
    input {
      padding-right: 1.5rem;
    }
  }

`

const Redirects = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: right;

  div {
    display: flex;
    justify-content: center;
    margin: 1rem 2.3rem;
  }

  div a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    margin-left: .8rem;
  }

  @media (${({ theme }) => theme.media.lteMedium}) {
    div {
      margin: 1rem 3rem;
    }
    div a {
      margin: 0;
    }
  }

  @media (max-width: 380px) {
    div {
      margin: .8rem 2rem;
    }
  }
`

export default function NavHeader() {
  return (
    <Navbar>
      <img src="/logo.png" alt="Logo" />

      <Search>
        <input type="text" placeholder="Search any things" />
        <button>Search</button>
      </Search>

      <Redirects>
        <div>
          <IoPersonSharp />
          <Link href="/auth/signin">Sign in</Link>
        </div>

        <div>
          <FaShoppingCart />
          <Link href="/">Cart</Link>
        </div>
      </Redirects>
    </Navbar>
  );
}
