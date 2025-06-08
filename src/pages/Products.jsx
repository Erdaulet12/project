import ProductList from "../components/Products/ProductList";
import { PRODUCTS_CREATE } from "../utils/consts";
import { Link } from "react-router-dom";
function Products() {
  return (
    <section class="block">
      <div class="container">
        <div class="block-header">
          <h1 class="title">Товары</h1>
          <Link to={PRODUCTS_CREATE} class="btn bg-primary">
            Создать
          </Link>
        </div>
        <ProductList />
      </div>
    </section>
  );
}

export default Products;
