import { useSearchParams } from 'react-router-dom';
import Products from '../components/product-list/Products';
import useFetchProducts from '../hooks/useFetchProducts';

export default function ProductListPage() {
  // 1. 상품 목록 얻기
  // ㄴ option 1 data 실질적으로 반환 받아서 props로 전달하여 사용
  // ㄴ option 2 data 얻어오는 함수 실행 -> 외부 저장소에 저장 -> 하위 컴포넌트에서 불러오기
  // useFetchProducts();
  // ㄴ 1-1. categoryId를 받아와서 걸러진 데이터를 받아오도록 useFetchProducts를 수정
  const [params] = useSearchParams();

  const categoryId = params.get('categoryId') ?? undefined;

  const { products } = useFetchProducts({ categoryId });

  // 2. 보여주기
  return (
    <div>
      productListPage
      <Products products={products} />
    </div>
  );
}
