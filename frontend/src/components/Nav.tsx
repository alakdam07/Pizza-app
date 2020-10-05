import GatsbyImage from 'gatsby-image';
import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import { NavStyles } from '../styles/Nav';
import Logo from '../styles/Logo';

interface Props {

}

export default function Home({ }: Props): ReactElement {
  return (
    <NavStyles>
      <ul>
        <li><Link to="/nigga"> Nigga</Link></li>
        <li><Link to="/beers"> Beers</Link></li>
        <li><Link to="/pizzas/">Pizza menu</Link></li>
        <li className="logo-item">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li><Link to="/slicemasters"> Slicemasters</Link></li>
        <li><Link to="/order">Order Menu</Link></li>
      </ul>
    </NavStyles>
  )
}
