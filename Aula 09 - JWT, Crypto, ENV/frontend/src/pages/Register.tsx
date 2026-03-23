import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './index.css'

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function createProduct(e: React.FormEvent) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        name,
        email,
        password
      })

      alert("Usuário registrado!");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Cadastrar Usuário</h1>
      <form onSubmit={createProduct}>
        <input
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}

export default Register
