import { Route, Routes } from 'react-router-dom';
import './App.css'
import ProductList from './pages/productList';
import CreateProduct from './pages/createProduct';
import EditProduct from './pages/editProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cadastro" element={<CreateProduct />} />
        <Route path="/edicao/:id" element={<EditProduct />} />
      </Routes>
    </>
  )
}

export default App
