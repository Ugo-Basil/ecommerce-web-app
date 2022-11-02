import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from '../../axios'
import image from '../../assets/amazon_logo.png'
import { useStateValue } from '../../StateProvider'

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
  const [{ }, dispatch] = useStateValue();

  async function login(e) {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/signin', { email, password });
      if (!res.data.error) {
        dispatch({
          type: 'SET_USER',
          user: res.data.user
        })
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate('/');
      } else if (res.data.error) {
        console.error(res.data.error);
      }
    } catch (err) {
      console.error(err);
    }
  }
    return (
      <Container>
        <Logo>
          <img src={image} alt="logo.png" />
        </Logo>

        <FormContainer>
          <h3>Sign-In</h3>
          <InputContainer>
            <p>Email</p>
            <input
              type="email"
              placeholder="youremail@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputContainer>
          <InputContainer>
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </InputContainer>

          <LoginButton onClick={login}>login</LoginButton>
          <InfoText>
            <p>
              By continuing you agree to Amazon's{" "}
              <span>Conditions of Use </span>
              and <span>Privacy Notice</span>
            </p>
          </InfoText>
        </FormContainer>
        <SignUpButton onClick={() => navigate("/signup")}>
          Create your Amazon Account
        </SignUpButton>
      </Container>
    );
}



const Container = styled.div`
width: 100%;
min-width: 450px;
height: fit-content;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img{
    width:100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3{
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: center;
    margin-bottom: 10px;
  }
`

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p{
    font-size: 14px;
    font-weight: 600;
  }
  input{
    width: 100%;
    height: 33px;
    padding-left: 6px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    outline: none;

    &:hover{
      border: 1px solid orange;
    }
  }
`

const LoginButton = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;

  ::placeholder {
    color: lightgray;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin-top: 20px;
  text-align: center;
  
  span{
    color: #426bc0;
    cursor: pointer;
  }
 
`

const SignUpButton = styled.button`
  width: 300px;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;
  outline: none;
  border: none;

  &:hover{
    background-color: #dfdfdf;
    border: 1px solid grey;
    cursor: pointer;
  }
`



export default SignIn