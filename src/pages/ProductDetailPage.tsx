import { useParams } from 'react-router-dom';
import useFetchProduct from '../hooks/useFetchProduct';
import ProductDetailView from '../components/product-detail/ProductDetailView';

export default function ProductDetailPage() {
  const params = useParams();

  const { loading, error } = useFetchProduct({
    productId: String(params.id),
  });
  // product data를 직접 받아와서 전달해주지 않고, trigger만 해주고 store에서 전달해줄게요. 왜냐하면 props drilling이 발생할 가능성이 커보여서

  if (loading) {
    return (
      <p>loading</p>
    );
  }

  if (error) {
    return (
      <p>Error!</p>
    );
  }

  return (
    <ProductDetailView />
  );
}
