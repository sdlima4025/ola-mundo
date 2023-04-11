import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from './paginas/SobreMim/index';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Inicio/>}/>
        <Route path="/SobreMim" element = {<SobreMim/>}/>
        <Route path="*" element = {<div>Página não encontrada!</div>}/>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
