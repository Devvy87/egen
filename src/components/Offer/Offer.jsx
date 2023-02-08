import React from 'react'
import lookingForDealers from "../../assets/lookingForDealers.jpg";
import { Section } from './Offer.styles';
import  offer_data  from './offer-data';
export const Offer = () => {
  return (
    <Section id="offer">
    <div className="image">
      <img src={lookingForDealers} alt="lighthouse" />
    </div>
    <div className="content">
      <div className="title">
        <h1>We looking for dealers!</h1>
      </div>
      <ul className="list">
        {offer_data.map(({ text,delivery, icon, color }) => {
          return (
            <li key={text}>
              <div className={`icon ${color}`}>{icon}</div>
              <div className="text">
                <h3>{text}</h3>

              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </Section>
);
  
}

