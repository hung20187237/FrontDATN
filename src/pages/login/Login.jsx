import {useContext, useEffect, useRef, useState} from "react";
import "./Login.css";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {message} from "antd";

export default function Login() {

    let navigate = useNavigate()

    const email = useRef();
    const password = useRef();
    const { dispatch } = useContext(Context);
    const [messageLogin, setMessageLogin] = useState('');
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'error',
            content: messageLogin,
        });
    };

    useEffect(() => {
        if (messageLogin !== '') {
            success()
            setMessageLogin('')
        }

    }, [messageLogin]);

    const handleClickLogin = async (e) => {
        e.preventDefault();
    
        try{
            const res = await axios.post("http://localhost:8800/api/auth/login",{ email: email.current.value, password: password.current.value });
            dispatch({type: 'LOG_IN',payload: res.data});
            navigate('/')
        } 
        catch(err){
            setMessageLogin(err.response.data)
        }
    };

  const handleClickCreateNewAccount = (e) =>{
      navigate('/register')
  }

  return (
    
    <div className="login">
        {contextHolder}
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AplusReviewFood</h3>
          <span className="loginDesc">
            Ăn sập Hà Nội với AplusReviewFood.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClickLogin}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit">Log in</button>
            <button className="loginRegisterButton" onClick={handleClickCreateNewAccount}>Create new account</button>
          </form>
        </div>
      </div>
    </div>
  );
}