import { Link } from "react-router-dom";
import {
  PRODUCTS_DETAIL,
  PRODUCTS_UPDATE,
  PRODUCTS_DELETE,
} from "../../utils/consts";

function ProductItem({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td colspan="3" class="actions-products" style={{ border: "none" }}>
        <Link to={PRODUCTS_DETAIL.substring(0,PRODUCTS_DETAIL.length-3)+product.id} class="btn bg-success">
          Смотреть
        </Link>
        <Link to={PRODUCTS_UPDATE.substring(0,PRODUCTS_UPDATE.length-3)+product.id} class="btn bg-warning">
          Изменить
        </Link>
        <Link to={PRODUCTS_DELETE.substring(0,PRODUCTS_DELETE.length-3)+product.id} class="btn bg-danger">
          Удалить
        </Link>
      </td>
    </tr>
  );
}

export default ProductItem;
