import React, { useState } from "react";
import styles from "./Login.module.css";
import Footer from "./Footer";
import Header from "./Header";
import logo from "./tc-logo.png";

function Login(props) {
  const [loginData, setLoginData] = useState({
    loginid: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginData.loginid || !loginData.password) {
      setErrorMessage("All fields are required.");
      setSuccessMessage("");
      return;
    }

    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: loginData.loginid,
        password: loginData.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((data) => {
        setSuccessMessage("Login successful!");
        setErrorMessage("");
        console.log("Response from server:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Invalid credentials. Please try again.");
        setSuccessMessage("");
      });
  };

  const handleSignup = () => {
    if (props.switchLogin) {
      props.switchLogin();
    }
  };

  return (
    <>
      <Header logo={logo} />
      <form onSubmit={handleSubmit} className={styles.login}>
        <p className={styles.input}>
          <label htmlFor="loginid">User ID:</label>
          <input
            id="loginid"
            name="loginid"
            value={loginData.loginid}
            onChange={handleChange}
            required
            className={styles.userid}
            placeholder="Enter your user ID"
          />
        </p>
        <p className={styles.input}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
            type="password"
            className={styles.password}
            placeholder="Enter your password"
          />
        </p>

        <div className={styles.btns}>
          <button type="submit" className={styles.btn}>
            Login
          </button>
          <button type="button" className={styles.btn} onClick={handleSignup}>
            Signup
          </button>
        </div>
      </form>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <Footer />
    </>
  );
}

export default Login;
