import styled from 'styled-components';
import { ProductSummary } from '../../types';
import numberFormat from '../../utils/numberFormat';

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
      {/* <div>{JSON.stringify(product)}</div> */}
      {product.category.name}
      <Thumbnail src={product.thumbnail.url} />
      <div>
        <p>{product.name}</p>
        {numberFormat(product.price)}
        원
      </div>
    </div>
  );
}
