import axios from 'axios';
import {
  Category,
  ProductDetail,
  ProductSummary,
} from '../types';

// low level에 가까운 내용들 url 주소, http 통신 method와 같은 것들을 숨김

const API_BASE_URL = process.env.API_BASE_URL
                      || 'https://shop-demo-api-01.fly.dev';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async fetchCategories(): Promise<Category[]> {
    const { data } = await this.instance.get('/categories');
    const { categories } = data;
    return categories;
  }

  async fetchProducts(): Promise<ProductSummary[]> {
    const { data } = await this.instance.get('/products');
    const { products } = data;
    return products;
  }

  async fetchProduct({ productId }: {
    productId: string
  }): Promise<ProductDetail> {
    const { data } = await this.instance.get(`/products/${productId}`);
    return data;
  }
}

export const apiService = new ApiService();
