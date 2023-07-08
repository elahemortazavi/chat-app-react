import React from 'react';
import google from "../assets/google.svg";

const Login = () => {
    return (
        <div>
            <div>
                <h2>Welcome to Elahe's Chat App</h2>
                <div>
                    <img src={google} alt="google-icon" />Sign in with google
                </div>
            </div>

        </div>
    );
};

export default Login;