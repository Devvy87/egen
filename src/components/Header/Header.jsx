import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import React, { useState } from "react";
import { Container } from './Header.styles';

export const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const html = document.querySelector("html");
    html.addEventListener("click", (e) => setIsNavOpen(false));




  return (
     <Container state={isNavOpen ? 1 : 0}>
  <div className="brand">
    <h1>Egen</h1>
  </div>
  <div className="toggle">
    {isNavOpen ? (
      <MdClose onClick={() => setIsNavOpen(false)} />
    ) : (
      <GiHamburgerMenu
        onClick={(e) => {
          e.stopPropagation();
          setIsNavOpen(true);
        }}
      />
    )}
  </div>
  <div className={`links ${isNavOpen ? "show" : ""}`}>
    <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="#catalog"> Catalog</a>
      </li>
      <li>
        <a href="#offer">Offer</a>
      </li>
      <li>
        <a href="#tour">About us</a>
      </li>
      
    </ul>
  </div>
  <div className="account-info">
    <div className="account">
      <span>
        <BsPerson />
      </span>
      <span>My Account</span>
    </div>
    
  </div>
</Container>
);
}

