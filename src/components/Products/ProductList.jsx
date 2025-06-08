import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { a } from "../../services/axiosInstance";
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await a.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <table class="table">
      <thead>
        <th>№</th>
        <th>Название</th>
        <th>Действие</th>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
