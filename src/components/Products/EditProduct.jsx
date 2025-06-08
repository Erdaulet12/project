import { Link } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";
import { use } from "react";
import {Link} from "react-router-dom";
function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await a.get(`products/${id}`);
        const product = res.data;
        setName(product.name) || '';
        setPrice(product.price) || 'undefined';
        setDescription(product.description) || '';
        setImage(product.image) || '';
        setCategory(product.category) || '';
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchProduct();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();

    const updatedProduct = {
      name: name,
      price: price,
      description: description,
      image: image,
      category: category,
    };

    try {
     const res = await a.patch(`/products/${id}`, updatedProduct);
     alert("Товар изменен");
     navigate(PRODUCTS);
    } catch (error) {
      console.error("Error:", error);
    }
  }


  return (
    <section class="block">
      <div class="container">
        <Link to={PRODUCTS} class="btn bg-danger">
          Назад
        </Link>
        <h1 class="title">Изменить товар</h1>
        <form class="form" onSubmit={handleSubmit}>
          <div class="form-control">
            <label for="name">Название товара</label>
            <input
              value="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              placeholder="Введите товара"
              required
            />
          </div>
          <div class="form-control">
            <label for="price">Цена</label>
            <input
              value="price"
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              type="number"
              placeholder="Введите цену"
              required
            />
          </div>
          <div class="form-control">
            <label for="description">Описание</label>
            <textarea
              value="description"
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Введите описание"
              required
            ></textarea>
          </div>
          <div class="form-control">
            <label for="image">Фото</label>
            <input
              value="image"
              onChange={(e) => setImage(e.target.value)}
              id="image"
              type="url"
              placeholder="Вставьте URL фото"
              required
            />
          </div>
          <div class="form-control">
            <label for="category">Категория</label>
            <input
              value="category"
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              type="text"
              placeholder="Введите категорию"
              required
            />
          </div>

          <button class="btn bg-warning" type="submit">
            Изменить
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditProduct;
