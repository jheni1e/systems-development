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
      <ul>
        {products.map((product: any) => (
          <li key={product._id}>
            <span>{product.name} - R$ {product.price}</span>

            <div className="actions">
              <Link to={`/edicao/${product._id}`}>
                <button>Editar</button>
              </Link>
              <button onClick={() => deleteProduct(product._id)}>
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
