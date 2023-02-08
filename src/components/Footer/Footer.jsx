import React from 'react'
import { Container } from './Footer.styles'
import { quickLinks } from './QuickLinks'
import { supportLinks } from './SuportLinks'
import { BTN } from '../Button/Button.styles'

export const Footer = () => {
  return (
    <Container>
    <div className="upper-footer">
      <div className="col">
        <div className="brand">
          <div className="logo">
          <h1>Egen</h1>
          </div>
         
        </div>
        <ul>
          <li>
            <span> +7 495 000 00 00 </span>
          </li>
          <li>
            <span>egen@gmail.com</span>
          </li>
          <li>
            <span>https://www.egen.com</span>
          </li>
        </ul>
      </div>
      <div className="col">
        <h2>Quick Links</h2>
        <ul>
          {quickLinks.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="col">
        <h2>Support</h2>
        <ul>
          {supportLinks.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="col">
        <h2>Newsletter</h2>
        <div className="newsletter">
          <input type="text" placeholder="Your Email" />
          <BTN>Subscribe</BTN>
        </div>
      </div>
    </div>
    <div className="lower-footer">
      
    </div>
  </Container>
  )
}

export default Footer