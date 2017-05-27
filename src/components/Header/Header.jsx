import React from 'react';
import {Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.svg'
import styles from './Header.css'

const Header = (props) => {
  return <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} className={styles.logo}/>
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
};

export default Header;
