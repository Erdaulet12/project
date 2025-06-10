import { ORDER_DELETE, ORDER_DETAIL } from "../../utils/consts";
import { Link } from "react-router-dom";

function OrderItem({ order }) {
  function formatDateTime(isoString) {
    if (!isoString) return "";
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(isoString).toLocaleString("kk-KZ", options);
  }

  if (!order) {
    return null;
  }

  return (
    <tr>
      <td>{(order.id)}</td>
      <td>
        {(order.customer.name)}, {(order.customer.phone)}
      </td>
      <td>{formatDateTime(order.orderTimestamp)}</td>
      <td colSpan="3" className="actions-category" style={{ border: "none" }}>
        <Link to={ORDER_DETAIL} className="btn bg-success">
          Смотреть
        </Link>
        <Link to={ORDER_DELETE} className="btn bg-danger">
          Удалить
        </Link>
      </td>
    </tr>
  );
}

export default OrderItem;
