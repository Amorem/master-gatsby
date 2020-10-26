import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';

export default function PizzasPage({ data }) {
  const pizzas = data.pizzas.edges;
  return (
    <>
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query pizzaQuery {
    pizzas: allSanityPizza {
      edges {
        node {
          name
          id
          slug {
            current
          }
          toppings {
            name
            id
          }
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
