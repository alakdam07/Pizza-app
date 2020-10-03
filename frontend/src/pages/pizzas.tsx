import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/pizzaLists/PizzaList';
interface Props {

}

export default function Pizzas(props): ReactElement {
  console.log(props);
  const totalPizza = props.data.pizzas.nodes;
  return (
    <>
      <PizzaList pizzas={totalPizza} />
    </>
  )
};

export const query = graphql`
query PizzaQuery {
  pizzas: allSanityPizza {
    nodes {
      name
      id
      slug {
        current
      }
      toppings {
        id
        name
      }
      image {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
}
`

