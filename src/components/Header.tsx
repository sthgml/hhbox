import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div``;

export default function Header() {
  return (
    <Container>
      <p>Hello, world</p>
      <h1>Shop</h1>
      <nav>
        <Link to="/products">Products</Link>
      </nav>
    </Container>
  );
}
