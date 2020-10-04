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
  query PizzaQuery($toppingRegex: String) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { regex: $toppingRegex } } } }
    ) {
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
            fixed(width: 600, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
