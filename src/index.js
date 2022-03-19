import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Paginas/Home/Home';
import Destino from './Paginas/Destinos/Destino';
import Promocoes from './Paginas/Promocoes/Promocoes';
import Experiencias from './Paginas/Experiencias/Experiencias';
import Contato from './Paginas/Contato/Contato';
import Cadastro from './Paginas/Cadastro/Cadastro';
import CadastroViagem from './Paginas/CadastroViagem/CadastroViagem';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Destino" element={<Destino />}></Route>
        <Route path="/Promocoes" element={<Promocoes />}></Route>
        <Route path="/Experiencias" element={<Experiencias />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
        <Route path="/CadastroViagem" element={<CadastroViagem />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
