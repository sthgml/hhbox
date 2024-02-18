import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { apiService } from '../services/ApiService';

import { ProductDetail, nullProductDetail } from '../types';

@singleton()
@Store()
export default class ProductDetailStore {
  product: ProductDetail = nullProductDetail;

  loading = true;

  error = false;

  async fetchProduct({ productId }: {
    productId: string;
  }) {
    // 1.loading start
    this.startLoading();

    // 2. apiService.fetchProdcut({productId})
    try {
      const product = await apiService.fetchProduct({ productId });
      console.log(product);
      this.setProduct(product);
    } catch {
      this.setError();
    }
  }

  // 3. loading end
  @Action()
  startLoading() {
    this.product = nullProductDetail;
    this.loading = true;
    this.error = false;
  }

  @Action()
  private setProduct(product: ProductDetail) {
    this.product = product;
    this.loading = false;
    this.error = false;
  }

  @Action()
  private setError() {
    this.product = nullProductDetail;
    this.loading = false;
    this.error = true;
  }
}
