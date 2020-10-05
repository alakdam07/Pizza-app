import React, { ReactElement } from 'react'
import { graphql } from 'gatsby';
import styled from 'styled-components';
interface Props {

}

export default function Tooping({ data }: Props): ReactElement {
  const beer = data.beer;
  //console.log(beer.rating);
  const rating = Math.round(beer.rating.average);

  return (
    <>
      <BeerGridStyles>
        <SingleBeerStyles >
          <img src={beer.image} alt={beer.name} />
          <h3>{beer.name}</h3>
          {beer.price}
          <p title={`${rating} out of 5 stars`}>
            {`⭐`.repeat(rating)}
            <span style={{ filter: `grayscale(100%)` }}>
              {`⭐`.repeat(5 - rating)}
            </span>
            <span>({beer.rating.reviews})</span>
          </p>
        </SingleBeerStyles>

      </BeerGridStyles>
    </>
  )
}


export const query = graphql`
query($beer: String!) {
  beer(name: { eq: $beer } ){
    name
    price
    image
    rating {
      average
      reviews
    }
  }
}`



const BeerGridStyles = styled.div`
display: grid;
gap: 2rem;
grid - template - columns: repeat(auto - fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
border: 1px solid var(--grey);
padding: 2rem;
text - align: center;
img {
  width: 100 %;
  height: 200px;
  object - fit: contain;
  display: block;
  display: grid;
  align - items: center;
  font - size: 10px;
}
`;
