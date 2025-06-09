import { ORDER_DELETE, ORDER_DETAIL } from "../../utils/consts";

function OrderItem({ order }) {
  function formatDateTime(dateString) {
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
  return (
    <tr>
      <td>{order.id}</td>
      <td>
        {(order, customer.name)}, {order.customer.phone}
      </td>
      <td>{formatDateTime(order.orderTimestamp)}</td>
      <td colspan="3" class="actions-category" style={{ border: "none" }}>
        <Link to={ORDER_DETAIL} class="btn bg-success">
          Смотреть
        </Link>
        <Link to={ORDER_DELETE} class="btn bg-danger">
          Удалить
        </Link>
      </td>
    </tr>
  );
}

export default OrderItem;
