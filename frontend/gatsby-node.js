const path = require('path');
const fetch = require('isomorphic-fetch');


exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Data can come from anywhere, but for now create it manually
  const response = await fetch('https://sampleapis.com/beers/api/ale');
  const data = await response.json();
  data.forEach(beer => {
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json',
        contentDigest: createContentDigest(beer),
      },
    };
    createNode({
      ...beer,
      ...nodeMeta,
    });
  });
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const createSinglePizzaPage = path.resolve(`./src/templates/SinglePizza.tsx`);
  //const createSingleToppingpage = path.resolve(`./src/templates/SingleTopping.tsx`)
  const createSingleToppingpage = path.resolve(`./src/pages/pizzas.tsx`);
  const createSingleBeerPage = path.resolve(`./src/templates/SingleBeer.tsx`)
  // This query is for Pizza
  const pizzaQuery = await graphql(`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        slug {
          current
        }
      }
    }
  }
  `)

  //This is toppins query

  const toppingQuery = await graphql(`
  query {
    toppings: allSanityTopping {
      nodes {
        name
        id
      }
    }
  }
  `)

  // This is for beers

  const BeerQuery = await graphql(`
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
`)

  pizzaQuery.data.pizzas.nodes.forEach(pizza => {
    createPage({
      path: `pizza/${pizza.slug.current}`,
      component: createSinglePizzaPage,
      context: {
        // This is slug variable we are passing to Singlepizzapage then quesry them
        slug: pizza.slug.current,
      },
    })
  });

  toppingQuery.data.toppings.nodes.forEach(topping => {
    createPage({
      path: `topping/${topping.name}`,
      component: createSingleToppingpage,
      context: {
        // This context varaible we are passing to /pages/pizzas.tsx then we use filter methond
        topping: topping.name, // we can filter them by name or
        toppingRegex: `/${topping.name}/i`, // we can filter them by regex
        //Both exmaples are shown in there
      }
    })
  });

  BeerQuery.data.allBeer.nodes.forEach(beer => {
    createPage({
      path: `beer/${beer.name}`,
      component: createSingleBeerPage,
      context: {
        beer: beer.name
      }
    })
  });

}
