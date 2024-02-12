import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Product from './Product';

import { ProductSummary } from '../../types';

type ProductsProps = {
  products: ProductSummary[]
}

const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 20%;
    padding: 1rem; 
    word-break: break-all;
  }

  a {
    display: block;
    text-decoration: none;
  }
`;

export default function Products({ products }: ProductsProps) {
  if (!products.length) {
    return null;
  }

  return (
    <Container>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`products/${product.id}`}>
              <Product product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
