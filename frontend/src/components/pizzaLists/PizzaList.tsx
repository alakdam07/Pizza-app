import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
interface IProps {

}
function SinglePizza({ pizza }) {
  console.log(pizza);

  return (
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
      <p>{pizza.toppings.map(topp => topp.name).join(', ')}</p>
    </Link>
  )
}


interface Props {

}

export default function PizzaList({ pizzas }) {
  console.log(pizzas);

  return (
    <div>
      {
        pizzas.map(pizza => <SinglePizza key={pizza.id} pizza={pizza} />)
      }
    </div>

  )
}
