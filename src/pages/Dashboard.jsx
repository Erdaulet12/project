import homeIcon from "../assets/images/menu/home.svg";
import productsIcon from "../assets/images/menu/products.svg";
import ordersIcon from "../assets/images/menu/orders.svg";
import infoIcon from "../assets/images/menu/info.svg";
import { Link } from "react-router-dom";
import { DASHBOARD, PRODUCTS, ORDERS } from "../utils/consts";

function Dashboard() {
  return (
    <section class="block">
      <div class="container">
        <h1 class="title">Админ панель</h1>
        <div class="dashboard-list">
          <Link to={DASHBOARD} class="dashboard-item bg-primary">
            <img src={homeIcon} alt="Home" />
            <h3 class="dashboard-item__title">Главная</h3>
          </Link>
          <Link to={PRODUCTS} class="dashboard-item bg-danger">
            <img src={productsIcon} alt="Products" />
            <h3 class="dashboard-item__title">Товары</h3>
          </Link>
          <Link to={ORDERS} class="dashboard-item bg-success">
            <img src={ordersIcon} alt="Orders" />
            <h3 class="dashboard-item__title">Заказы</h3>
          </Link>
          <Link to={DASHBOARD} class="dashboard-item bg-warning">
            <img src={infoIcon} alt="Category" />
            <h3 class="dashboard-item__title">Помощь</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Dashboard;
