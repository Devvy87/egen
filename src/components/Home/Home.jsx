import React, {useState} from 'react'
import { BTN } from '../Button/Button.styles';
import { Section } from './Home.styles';
import mainImage from "../../assets/main.jpg";

export const Home = () => {

    const [value, setValue] = useState("3kvt - 12kvt");


  return (
    <Section>
       <div className="background">
        <img src={mainImage} alt="Hero" />
      </div>
      <div className="content">
        <div className="info">
          <h1>It's Time To</h1>
          <h1>choose  a generator</h1>
          <BTN>Read more</BTN>
        </div>
        <div className="planner">
          <form>
            <div className="row">
              <label>Engine type:</label>
              <select>
                <option>1 phaze</option>
                <option>3 phaze</option>
                <option>Equal phaze</option>
              </select>
            </div>
            <div className="row">
              <label>Fuel type:</label>
              <select>
                <option>Gasoline</option>
                <option>Diesel</option>
                
              </select>
            </div>
          
            <div className="row">
              <label>Power range:</label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="row">
              <BTN>Choose</BTN>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

