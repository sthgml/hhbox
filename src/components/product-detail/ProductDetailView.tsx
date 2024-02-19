import React from 'react';
import styled from 'styled-components';

import useProductDetailStore from '../../hooks/useProductDetailStore';
import Images from './Images';
import Description from './Description';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  aside {
    width: 38%;
  }

  article {
    width: 60%;
  }
`;

export default function ProductDetailView() {
  // store에서 상품 정보 얻기
  const [{ product }] = useProductDetailStore();
  // 보여주기

  return (
    <Container>
      <aside>
        <Images images={product.images} />
      </aside>
      <article>
        <h2>{product.name}</h2>
        {/* <AddToCartForm /> */}
        <Description value={product.description} />

      </article>
    </Container>
  );
}
