import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { a } from "../../services/axiosInstance";
function DetailProduct() {
  const [products, setProducts] = useState({});
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await a.get(`products/${id}`);
        setProducts(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchProducts();
  }, [id]);
  return (
    <section class="block">
      <div class="container">
        <Link to={PRODUCTS} class="btn bg-danger">
          Назад
        </Link>
        <h1 class={"title"}>Детали товара</h1>
        <div class="product-detail">
          <img src={products.image} alt={products.name} class="product-img" />
          <div class="product-detail__content">
            <h2 class="product-detail__title">{products.name}</h2>
            <p>Цена: {products.price}</p>
            <p>Описание: {products.description}</p>
            <p>
              Категория: <span class="category-badge">{products.category}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailProduct;
