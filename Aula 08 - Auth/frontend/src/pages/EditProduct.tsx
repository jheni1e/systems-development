import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");

  async function getProduct() {
    const response = await axios.get(`http://localhost:8080/api/product/products/${id}`);
    const product = response.data;
    
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setStock(product.stock);
    setCategory(product.category);
  }

  async function updateProduct(e: React.FormEvent) {
    e.preventDefault();

    await axios.put(`http://localhost:8080/api/product/products/${id}`, {
      name,
      description,
      price,
      stock,
      category
    });

    alert("Produto atualizado!");
    navigate("/");
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Editar Produto</h1>
      <form onSubmit={updateProduct}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />

        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  )
}

export default EditProduct
