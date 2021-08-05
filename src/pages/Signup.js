import React, { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import EntryScreen, {
  BottomLink,
  BottomContainer,
  ErrorMessage,
  LoginBodyContainer,
  LoginButton,
  LoginButtonContainer,
  LoginForm,
  LoginInput,
  LoginInputContainer,
  LoginPanelContainer,
  LoginTitleContainer,
} from "../screens/EntryScreen";
import { EntryContext } from "../contexts/EntryContext";

const Signup = () => {
  const { signup, history } = useAuth();
  const { emailRef, passwordRef, usernameRef, setError, loading, setLoading } =
    useContext(EntryContext);

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value
      );
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
    window.location.reload();
    setLoading(false);
  };

  const SignupForm = (
    <LoginForm onSubmit={handleSubmitSignup}>
      <LoginInputContainer>
        <LoginInput
          type="text"
          id="username"
          name="username"
          placeholder="@username"
          ref={usernameRef}
          required
        />
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
      </LoginInputContainer>

      <LoginButtonContainer>
        <LoginButton disabled={loading} type="submit">
          Join
        </LoginButton>
      </LoginButtonContainer>
    </LoginForm>
  );

  const BottomMessage = (
    <>
      Already have an account? <BottomLink to="/login">Login</BottomLink>
    </>
  );
  return (
    <>
      <EntryScreen
        title="Signup"
        form={SignupForm}
        bottomMessage={BottomMessage}
      />
    </>
  );
};

export default Signup;
