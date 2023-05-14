import React from "react";
import "./SignupScreen.css";

const SignupScreen = () => {
  const register = (event) => {
    event.preventDefault();
  };
  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signupScreen">
      <form>
        <h1> Sign In </h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="singUp__screen__gray">New to Netflix? </span>
          <span className="signUpScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
