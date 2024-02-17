import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import validator from "validator";
import AuthCard from "../../components/StylesAuth/AuthCard";
import AuthInput from "../../components/StylesAuth/AuthInput";
import api from '../../http';

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
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  const navigate = useNavigate();

  async function handleSubmitForm(e) {
    e.preventDefault();
    let isOk;

    if (name.length < 3) {
      toast.error('The name must have at least 3 characters')
      isOk = false;
      return;
    } else isOk = true;

    if (!validator.isEmail(email)) {
      toast.error('Invalid Email')
      isOk = false;
      return;
    } else isOk = true;


    if (password !== checkPassword) {
      toast.error('Passwords must be the same')
      isOk = false;
      return;
    } else isOk = true;


    if (password.length < 6) {
      toast.error('The password must have at least 6 characters')
      isOk = false;
      return;
    } else isOk = true;

    if (isOk) {
      await api.post('/api/user/create', {
        name, email, password,
      })
        .then(res => {
          if (res.status === 200) toast.success(res.data.msg);
        })
        .catch(e => {
          console.log(e);
          if (e.response.status === 400) {
            toast.error(e.response.data.msg)
          }
        })

      await api.post('/api/user/login', {
        email, password
      })
        .then(res => {
          setCookie('auth', res.data.token);
          navigate("/");
        })
    }
  }

  return (
    <>
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
