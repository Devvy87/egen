import React from 'react'
import './Catalog.styles'
import {data} from '../../data/catalog-data'
import { Section } from './Catalog.styles'
export const Catalog = () => {
  return (
    <Section id="catalog">
      <div className="services">
        {data.map(({ image, title,price, description }) => {
          return (
            <div className="service" key={title}>
              <img src={image} alt="service" />
              <h3>{title}</h3>
              <h2>{price}</h2>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  )
}

