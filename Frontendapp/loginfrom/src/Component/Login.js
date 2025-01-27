import React from "react";
import styles from './Login.module.css';
import Register from "./Register";
import Signup from "./Signup";
import {Link,useNavigate} from 'react-router-dom';


function Login() {

   return (
    <>
      <div className={styles.login}>
      <p className={styles.input}><label>User ID:</label><input className={styles.userid} type="text" placeholder="enter your user id"></input> </p>
        <p className={styles.input}><label>Password:</label><input type="password" placeholder="enter your password"></input></p>
        
        <div className={styles.btns}>
        <button className={styles.btn}>Login</button>
          <button className={styles.btn} onClick={signup}>Signup</button>
          <Link to='/register'> register</Link>
        </div>       
        </div>
    </>
)
  

}

export default Login;