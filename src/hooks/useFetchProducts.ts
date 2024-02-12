// 어떤 페이지를 들어갔을 때 실행된다. 그 책임을 얘가 갖는다.

import { useFetch } from 'usehooks-ts';

import { ProductSummary } from '../types';

const BASE_URL = 'https://shop-demo-api-01.fly.dev';

export default function useFetchProducts() {
  type Data = {
    products: ProductSummary[];
  }

  const { data } = useFetch<Data>(`${BASE_URL}/products`);

  return data?.products ?? [];
  // return data?.products ?? [];
}
