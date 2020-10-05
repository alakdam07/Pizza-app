import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { PizzaGridStyles, PizzaStyles } from '../../styles/Grids';
interface IProps {
  fluid: fixedObject | fixedObject[];
}
function SingleBeer({ beer, fluid }: IProps) {
  return (
    <PizzaStyles>
      <Link to={`/beer/${beer.name}`}>
        <img src={beer.image} alt={beer.name} />
      </Link>
    </PizzaStyles>
  )
}


interface Props {

}

export default function BeerList({ beers }) {
  console.log(beers);


  return (
    <PizzaGridStyles>
      {
        beers.map(beer => <SingleBeer key={beer.id} beer={beer} />)
      }
    </PizzaGridStyles>

  )
}
