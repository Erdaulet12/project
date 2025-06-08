import { PRODUCTS } from "../../utils/consts";

function DeleteOrder() {
  return (
    <section class="block">
      <div class="container">
        <h1 class="title">Вы действительно хотите удалить заказ №id ?</h1>
        <p class="mb-5">
          Это действие приведет к потере всех данных, связанных с этими
          заказами. Пожалуйста, подтвердите свое решение.
        </p>
        <form class="actions-sm">
          <button type="submit" class="btn bg-danger">
            Да
          </button>
          <Link to={PRODUCTS} class="btn bg-primary">
            Нет
          </Link>
        </form>
      </div>
    </section>
  );
}

export default DeleteOrder;
