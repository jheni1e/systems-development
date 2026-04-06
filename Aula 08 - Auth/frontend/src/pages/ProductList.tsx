import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './index.css'

function ProductList() {
  const [products, setProducts] = useState([])

  async function getProducts() {
    const response = await axios.get("http://localhost:8080/api/product/products");
    setProducts(response.data);
    console.log(response)
  }

  async function deleteProduct(id: string) {
    await axios.delete(`http://localhost:8080/api/product/products/${id}`);
    getProducts();
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h1>Produtos</h1>
      <Link to="/cadastro">
        <button>Novo Produto</button>
      </Link>
      <table className="min-w-full table-fixed border-collapse mt-6">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>R$ {product.price}</td>
              <td className="actions">
                <Link to={`/edicao/${product._id}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deleteProduct(product._id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
