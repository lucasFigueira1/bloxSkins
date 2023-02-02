import "./App.css";
import Navbar from './components/Navbar/Navbar'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  const info = "The best CS:GO skins market. ¡Available soon!"

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={info}/>
    </>
    
  )
}

export default App;