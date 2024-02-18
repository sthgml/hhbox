// 어떤 페이지를 들어갔을 때 실행된다. 그 책임을 얘가 갖는다.

import { useEffect } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';

import ProductsStore from '../stores/ProductsStore';

export default function useFetchProducts() {
  const store = container.resolve(ProductsStore);

  const [{ products }] = useStore(store);

  useEffect(() => {
    store.fetchProducts();
  }, []);

  return { products };
  // return data?.products ?? [];
}
