import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../Firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error));
  };

  return (
    <LoginContainer>
      <LoginInsideContainer>
        <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" />

        <Button type="submit" onClick={signIn}>
          {" "}
          Sign In With Google
        </Button>
      </LoginInsideContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  background-color: #f8f8f8;
  height: 100vh;
`;
const LoginInsideContainer = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 10px;
  text-align: center;

  display: grid;
  place-items: center;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    background-color: blue !important;
    text-transform: inherit !important;
    color: white !important;
    padding: 10px !important;
  }
`;
