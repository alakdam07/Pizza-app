import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { PizzaGridStyles, PizzaStyles } from '../../styles/Grids';
interface IProps {
  fluid: fixedObject | fixedObject[];
}
function SinglePizza({ pizza, fluid }: IProps) {

  console.log("Pizaa", pizza);

  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
        <p>{pizza.toppings.map(topp => topp.name).join(', ')}</p>
        <Img fluid={pizza?.image?.asset?.fluid} alt={pizza.name} />
      </Link>
    </PizzaStyles>
  )
}


interface Props {

}

export default function PizzaList({ pizzas }) {


  return (
    <PizzaGridStyles>
      {
        pizzas.map(pizza => <SinglePizza key={pizza.id} pizza={pizza} />)
      }
    </PizzaGridStyles>

  )
}
