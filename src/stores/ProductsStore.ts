import axios from 'axios';

import { singleton } from 'tsyringe';

import { Store, Action } from 'usestore-ts';

import { ProductSummary } from '../types';

// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://shop-demo-api-01.fly.dev';

@singleton()
@Store()
export default class ProductsStore {
  products: ProductSummary[] = [];

  @Action()
  async fetchProducts({ categoryId }: {
    categoryId?: string;
  }) {
    this.setProducts([]);

    const { data } = await axios.get(`${BASE_URL}/products`, {
      params: { categoryId },
    });
    const { products } = data;

    this.setProducts(products);
  }

  @Action()
  setProducts(products: ProductSummary[]) {
    this.products = products;
  }
}
