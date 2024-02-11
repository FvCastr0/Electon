import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import styled from "styled-components";
import verifyUserTokenRedirect from "../../auth/verifyUserTokenRedirect";
import AuthCard from "../../components/StylesAuth/AuthCard";
import AuthInput from "../../components/StylesAuth/AuthInput";
import api from '../../http';

const SigninPage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  let err = {};

  useEffect(() => {
    if (cookies.auth !== null) verifyUserTokenRedirect(cookies.auth);
  })



  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/api/user/login', {
      email, password,
    })
      .then(res => {
        if (res.status === 200) toast.success(res.data.msg);
        setCookie('auth', res.data.token);
      })
      .catch(e => {
        if (e.response.status === 400) {
          err = { success: false, msg: e.response.data.msg }
        }
      })

    if (!err.success) {
      toast.error(err.msg);
    }
  }

  return (
    <>
      <SigninPage>
        <AuthCard onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <AuthInput>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} id="email" required />
            <label htmlFor="email">Email</label>
          </AuthInput>

          <AuthInput>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" required />
            <label htmlFor="password">Password</label>
          </AuthInput>

          <legend>You don't have an account? <Link to="/auth/signup"> Click here to create </Link> </legend>

          <button type="submit">Login</button>

        </AuthCard>
      </SigninPage>
    </>
  );
}
