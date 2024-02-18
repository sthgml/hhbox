import { screen } from '@testing-library/react';

import { container } from 'tsyringe';
import ProductDetailView from './ProductDetailView';

import { render } from '../../utils/test-helpers';

import ProductDetailStore from '../../stores/ProductDetailStore';

import fixtures from '../../../fixtures';

const [product] = fixtures.products;

// test에 store에 대한 정보를 전달해주려면?
// tsyringe에 있는 container를 가져와서 ~~

test('ProductDetail', async () => {
  const store = container.resolve(ProductDetailStore);

  await store.fetchProduct({ productId: product.id });

  render(<ProductDetailView />);

  screen.getByText(product.name);
});
