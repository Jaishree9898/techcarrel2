import logo from './tc-logo.png';
import Header from './Header';
import Footer from './Footer';
import styles from './Signup.module.css';
import { useState } from 'react';

function Signup(props) {
  const [signupData, setSignupData] = useState({
    userid: '',
    emailid: '',
    contact: '',
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!signupData.userid || !signupData.emailid || !signupData.contact || !signupData.password) {
      setErrorMessage('All fields are required.');
      setSuccessMessage('');
      return;
    }

    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Data received successfully') {
          setSuccessMessage('You have been successfully registered!');
          setErrorMessage('');
          setSignupData({ userid: '', emailid: '', contact: '', password: '' });
        } else {
          setErrorMessage(data.message || 'Registration failed. Please try again.');
          setSuccessMessage('');
        }
        console.log('Response from server:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('An error occurred. Please try again later.');
        setSuccessMessage('');
      });
  };

  return (
    <>
      <Header logo={logo} />
      <form className={styles.signup} onSubmit={handleSubmit}>
        <p>
          <label>User ID:</label>
          <input
            name="userid"
            value={signupData.userid}
            onChange={handleChange}
            required
            type="text"
            placeholder="Enter your userid"
          />
        </p>
        <p>
          <label>Email ID:</label>
          <input
            name="emailid"
            value={signupData.emailid}
            onChange={handleChange}
            required
            type="email"
            placeholder="Enter your email"
          />
        </p>
        <p>
          <label>Contact:</label>
          <input
            name="contact"
            value={signupData.contact}
            onChange={handleChange}
            required
            type="number"
            placeholder="Enter your contact number"
          />
        </p>
        <p>
          <label>Password:</label>
          <input
            name="password"
            value={signupData.password}
            onChange={handleChange}
            required
            type="password"
            placeholder="Enter your password"
          />
        </p>
        <div className="buttons">
          <button type="submit">Signup</button>
          <button type="button" onClick={props.switchLogin}>
            Back to Login
          </button>
        </div>
      </form>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <Footer />
    </>
  );
}

export default Signup;
