import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const LoginBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

const LoginColumnContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
  min-height: 25rem;
  min-width: 19rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0.1rem -2px black;
  border-radius: 0.5rem;
  text-align: center;
`;

const LoginTitleContainer = styled.div`
  height: 30%;
  font-size: 1.7em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginBodyContainer = styled.div`
  height: 70%;
  width: 60%;
  font-size: 1em;
`;

const LoginForm = styled.form`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginInputContainer = styled.div`
  height: 50%;
  width: 100%;
  white-space: no-wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginButtonContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginInput = styled.input`
  text-align: center;
  padding: 0.7rem 1rem;
  margin: 0.7rem 0;
  font-size: 0.8em;
  border-bottom: 0.01rem groove;
  color: #111;
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 0.8em;
  border-radius: 0.5rem;
  background-color: #000;
  color: #fff;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

const BottomMessage = styled.div`
  text-align: center;
  opacity: 0.5;
  font-size: 0.8em;
  margin-top: 0.7rem;
`;

const BottomLink = styled(Link)`
  text-decoration: underline;
  &:hover {
    color: #fff;
  }
`;

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  return (
    <>
      <LoginBackground>
        <LoginColumnContainer>
          {error && console.log(error)}
          <LoginPanelContainer>
            <LoginTitleContainer>Signup</LoginTitleContainer>
            <LoginBodyContainer>
              <LoginForm onSubmit={handleSubmitSignup}>
                <LoginInputContainer>
                  <LoginInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    spellcheck="false"
                    ref={emailRef}
                  />

                  <LoginInput
                    type="password"
                    id="pwd"
                    name="pwd"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                  />

                  <LoginInput
                    type="password"
                    id="pwdcf"
                    name="pwdcf"
                    placeholder="Confirm"
                    ref={passwordConfirmRef}
                    required
                  />
                </LoginInputContainer>

                <LoginButtonContainer>
                  <LoginButton disabled={loading} type="submit">
                    Join
                  </LoginButton>
                </LoginButtonContainer>
              </LoginForm>
            </LoginBodyContainer>
          </LoginPanelContainer>
          <BottomMessage>
            Already have an account? <BottomLink to="/login">Login</BottomLink>
          </BottomMessage>
        </LoginColumnContainer>
      </LoginBackground>
    </>
  );
};

export default Signup;