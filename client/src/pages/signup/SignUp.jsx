import React, {useState} from "react";
import styled from "styled-components";
import image from "../../assets/amazon_logo.png";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


async function signup(e) {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/signup', { fullName, email, password });
      if (!res.data.error) {
        navigate('/signin');
    } else if (res.data.error) {
        console.error(res.data.error);
      }
    }
    catch (err) {
      console.error(err);
    }
}

  return (
    <Container>
      <Logo>
        <img src={image} alt="logo.png" />
      </Logo>

      <FormContainer>
        <h3>Sign-Up</h3>
        <InputContainer>
          <p>Name</p>
          <input
            type="email"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </InputContainer>
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
        <SignUpButton onClick={signup}>Create Amazon Account</SignUpButton>
        <InfoText>
          <p>
            By continuing you agree to Amazon's <span>Conditions of Use </span>
            and <span>Privacy Notice</span>
          </p>
        </InfoText>
      </FormContainer>
      <SignInButton onClick={() => navigate("/signin")}>
        Back to Login
      </SignInButton>
    </Container>
  );
};

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
  img {
    width: 100%;
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

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: center;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 100%;
    height: 33px;
    padding-left: 6px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    outline: none;

    &:hover {
      border: 1px solid orange;
    }

    ::placeholder{
      color: lightgray;
    }
  }
`;

const SignUpButton = styled.button`
  width: 70%;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background-color: #f3b414;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin-top: 20px;
  text-align: center;

  span {
    color: #426bc0;
    cursor: pointer;
  }
`;

const SignInButton = styled.button`
  width: 300px;
  height: 35px;
  background-color: #f3b414;
  font-size: 12px;
  margin-top: 20px;
  outline: none;
  border: none;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid grey;
    cursor: pointer;
  }
`;

export default SignUp;
