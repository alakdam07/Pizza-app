import GatsbyImage from 'gatsby-image';
import React, { ReactElement } from 'react';
import { Link } from 'gatsby'

interface Props {

}

export default function Home({ }: Props): ReactElement {
  return (
    <nav>
      <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/beers"> Beers</Link></li>
        <li><Link to="/pizzas/">Pizza menu</Link></li>
        <li><Link to="/slicemasters"> Slicemasters</Link></li>
        <li><Link to="/order">Order Menu</Link></li>
      </ul>
    </nav>
  )
}
