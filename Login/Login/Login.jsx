import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React, { useState } from 'react';
import emailIcon from '../../assets/login/email.png';
import passwordIcon from '../../assets/login/password.png';
import personIcon from '../../assets/login/person.png';
import './Login.css';

const Login = () => {
    const [action, setAction] = useState("Login");

    const responseGoogle = (response) => {
        console.log(response);
        // Handle the Google login response here
    };

    return (
        <GoogleOAuthProvider clientId="194087623895-vid3e9uhfmejnm6vem9vvg0jc845c5lo.apps.googleusercontent.com">
            <div className='container'>
                <h2>Welcome to Education</h2>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {action === "Sign Up" && (
                        <div className="input">
                            <img src={personIcon} alt="user icon" />
                            <input type="text" placeholder='Username' />
                        </div>
                    )}
                    <div className="input">
                        <img src={emailIcon} alt="email icon" />
                        <input type="email" placeholder='Email Id' />
                    </div>
                    <div className="input">
                        <img src={passwordIcon} alt="password icon" />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                {action === "Login" && (
                    <div className="forgot-password">
                        <span>Forgot Password?</span>
                    </div>
                )}
                <div className='submit-container'>
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <GoogleLogin
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        useOneTap
                    />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
