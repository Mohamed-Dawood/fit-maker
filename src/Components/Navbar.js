import Logo from './Logo';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpenNav() {
    setIsOpen(() => !isOpen);
    console.log(isOpen);
  }

  return (
    <div className="navbar">
      <Logo />
      <ul className={!isOpen ? 'open' : ''}>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/program">Programs</a>
        </li>
        <li>
          <a href="/coaching">Coaching</a>
        </li>
        <li>
          <a href="/membership">Membership</a>
        </li>
        <li>
          <a href="/about us">About Us</a>
        </li>
      </ul>
      <div className="register">
        <button className="login">login</button>
        <button className="signup">sign in</button>
      </div>
      <div
        className="bars"
        style={{ borderColor: !isOpen ? 'var(--main-color)' : 'transparent' }}
        onClick={handleOpenNav}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar;
