
import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

interface Props {

}

export default function Beer({ data }: Props): ReactElement {
  console.log("Nigga", data);

  return (
    <>
      <h1>Beers</h1>
    </>
  )
};



export const query = graphql`
  query {
   allBeer {
    nodes {
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

`
