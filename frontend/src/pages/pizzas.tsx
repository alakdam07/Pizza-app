import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/pizzaLists/PizzaList';
import ToppingList from '../components/ToppingsList/Toppings';
interface Props {

}

// this pageContext is coming from gatsby-node.js when we created the topping page's
// context.

export default function Pizzas(props, { pageContext }): ReactElement {


  const totalPizza = props.data.pizzas.nodes;

  return (
    <>
      <ToppingList />
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

// export const query = graphql`
//   query PizzaQuery($topping: [String]) {
//     pizzas: allSanityPizza(
//       filter: { toppings: { elemMatch: { name: { in: $topping } } } }
//     ) {
//       nodes {
//         name
//         id
//         slug {
//           current
//         }
//         toppings {
//           id
//           name
//         }
//         image {
//           asset {
//             fixed(width: 600, height: 200) {
//               ...GatsbySanityImageFixed
//             }
//             fluid(maxWidth: 400) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
