import React from 'react';
import styles from './Header.module.css';
import Socialmedia from './Socialmedia';
import facebook from './icons8-facebook-48.png';
import instagram from './icons8-instagram-logo-48.png';
import linkdin from './icons8-linkedin-48.png';


function Header(props) {
  return (
    <>
      <div className={styles.header}>
      <img className={styles.tclogo} src={props.logo} alt="TechCarrel Logo" />
      <span className={styles.tc}>TechCarrel</span>
      <Socialmedia facebook={facebook} instagram={instagram} linkdin={linkdin} />
      </div>
    </>
  );
}

export default Header;
