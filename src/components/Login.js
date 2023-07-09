import React from 'react';
import google from "../assets/google.svg";
import styles from "./Login.module.css";

const Login = () => {
    return (
      <div className={styles.loginPage}>
        <div className={styles.loginCard}>
          <h2>Welcome to Elahe's Chat App</h2>
          <div className={styles.button}>
            <img src={google} alt="google-icon" />
            Sign in with google
          </div>
        </div>
      </div>
    );
};

export default Login;