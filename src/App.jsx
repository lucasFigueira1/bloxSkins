import './App.css'
// React Router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home/home'
import ItemDetail from './pages/ItemDetail/ItemDetail'
// Components
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
