import axios from "axios";
import { useRef } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {

  let navigate = useNavigate()

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClickRegister = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://localhost:8800/api/auth/register", user);
        navigate('/')
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleClickLogin = async (e) => {
    navigate('/')
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">AplusReviewFood</h3>
          <span className="registerDesc">
            Ăn sập Hà Nội cùng với AplusReviewFood.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClickRegister}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="registerInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="registerInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="registerInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="registerInput"
              type="password"
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>
            <button className="registerLoginButton" onClick={handleClickLogin}>Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}