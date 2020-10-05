import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BeerList from '../components/BeerList/BeerList'
interface Props {

}

export default function Beer({ data }: Props): ReactElement {
  console.log(data);
  const beers = data?.allBeer?.nodes;
  return (
    <>
      <BeerList beers={beers} />
    </>
  )
};

export const query = graphql`
  query {
   allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;

