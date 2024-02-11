import Head from "next/head";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import validator from "validator";
import AuthCard from "../../components/StylesAuth/AuthCard";
import AuthInput from "../../components/StylesAuth/AuthInput";

const SignupPage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');


  function handleSubmitForm(e) {
    e.preventDefault();
    handleCheckName();
    handleCheckEmail();
    handleCheckPassword();
  }

  function handleCheckName() {
    if (name.length < 3) {
      toast.error('The name must have at least 3 characters')
      return;
    }
  }

  function handleCheckEmail() {
    if (!validator.isEmail(email)) {
      toast.error('Invalid Email')
      return;
    }
  }

  function handleCheckPassword() {
    if (password.length < 6) {
      toast.error('The password must have at least 6 characters')
      return;
    }
    if (password !== checkPassword) {
      toast.error('Passwords must be the same')
      return;
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>

      <SignupPage onSubmit={handleSubmitForm}>
        <AuthCard>
          <h1>Sign up</h1>

          <AuthInput>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} id="name" required />
            <label htmlFor="name">Name</label>
          </AuthInput>

          <AuthInput>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} id="email" required />
            <label htmlFor="email">Email</label>
          </AuthInput>

          <AuthInput>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" required />
            <label htmlFor="password">Password</label>
          </AuthInput>

          <AuthInput>
            <input type="password" onChange={(e) => setCheckPassword(e.target.value)} value={checkPassword} id="checkPassword" required />
            <label htmlFor="checkPassword">Check password</label>
          </AuthInput>

          <button type="submit">Create account</button>

        </AuthCard>
      </SignupPage>
    </>
  );
}
