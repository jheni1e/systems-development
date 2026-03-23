import { useState } from "react"
import axios from "axios"
import './index.css'

function Login() {
  const [userToken, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function userLogin(e: React.FormEvent) {
    e.preventDefault();

    try {

      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
      const token = response.data;

      setToken(token);
      alert("Usuário fez login!");
      console.log(token);
    } catch (error) {
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={userLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
