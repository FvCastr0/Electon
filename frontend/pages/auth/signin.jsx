import AuthCard from "@/components/StylesAuth/AuthCard";
import AuthInput from "@/components/StylesAuth/AuthInput";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const SigninPage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>

      <SigninPage>
        <AuthCard>
          <h1>Sign in</h1>
          <AuthInput>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} id="email" required />
            <label htmlFor="email">Email</label>
          </AuthInput>

          <AuthInput>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" required />
            <label htmlFor="password">Password</label>
          </AuthInput>

          <legend>You don't have an account? <Link href="/auth/signup"> Click here to create </Link> </legend>

          <button type="submit">Login</button>

        </AuthCard>
      </SigninPage>
    </>
  );
}
