import { PRODUCTS } from "../../utils/consts";

function DetailOrder() {
  return (
    <section class="block">
      <div class="container">
        <Link to={PRODUCTS} class="btn bg-danger">
          Назад
        </Link>
        <h1 class="title">Детали заказа</h1>
        <div class="order-detail">
          <p>
            <strong>Имя клиента: </strong>name
          </p>
          <p>
            <strong>Телефон клиента: </strong>phone
          </p>
          <p>
            <strong>Почта клиента: </strong>email
          </p>
          <p>
            <strong>Город, адрес: </strong>city, address
          </p>
          <div class="order-data">
            <h2 class="title">Товары для заказа</h2>
            <div class="order-data__list">
              <p>
                Пеперони, количество: quantity, цена: price &#8376;, итого:
                price &#8376;
              </p>
              <p>
                Пеперони, количество: quantity, цена: price &#8376;, итого:
                price &#8376;
              </p>
            </div>
          </div>
          <h2 class="title">Итого: total &#8376;</h2>
        </div>
      </div>
    </section>
  );
}

export default DetailOrder;
