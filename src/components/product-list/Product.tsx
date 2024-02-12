import styled from 'styled-components';
import { ProductSummary } from '../../types';

type ProductProps = {
  product: ProductSummary
}

const Thumbnail = styled.img.attrs({
  alt: '썸네일',
})`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
`;

export default function Product({ product }: ProductProps) {
  return (
    <div>
      <p>
        {JSON.stringify(product)}
      </p>
      <Thumbnail src={product.thumbnail.url} />
    </div>
  );
}
