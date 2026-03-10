import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function CreateProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  let date = new Date();
  date.setDate(date.getDate());

  async function createProduct(e: React.FormEvent) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/product/products", {
        name,
        description,
        price,
        stock,
        category,
        date
      })

      alert("Produto criado!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={createProduct}>
        <input
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Estoque"
          onChange={(e) => setStock(Number(e.target.value))}
        />

        <input
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}