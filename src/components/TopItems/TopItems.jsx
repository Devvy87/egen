import React from 'react'
import { Section } from './TopItems.styles';
import {data} from '../../data/catalog-data'
import { BTN } from '../Button/Button.styles'

export const TopItems = () => {
  return (
    <Section id="destination">
    <div className="info">
      <h2>
        Top <span>Items</span> 
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum et tempore!
      </p>
      <BTN>Choose it!</BTN>
    </div>

    <div className="destinations">
      {data.slice(1,4).map(({ id,name, image }) => {
        return (
          <div className="destination" key={id}>
            <div className="image">
              <img src={image} alt="destinations" />
            </div>
            <div className="name">
              <h3>{name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  </Section>
  )
}

