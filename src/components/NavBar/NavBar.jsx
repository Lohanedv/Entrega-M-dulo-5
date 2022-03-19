import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";
export default () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">CampingTour</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/'><a class="nav-link active" aria-current="page" >Inicio</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/Destino'><a class="nav-link" >Destinos</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/Promocoes'><a class="nav-link disabled" tabindex="-1" aria-disabled="true">Promoções</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/Experiencias'><a class="nav-link disabled" tabindex="-1" aria-disabled="true">Experiencias</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/Contato'><a class="nav-link disabled" tabindex="-1" aria-disabled="true">Contato</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/Cadastro'><a class="nav-link disabled" tabindex="-1" aria-disabled="true">Cadastro</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/CadastroViagem'><a class="nav-link disabled" tabindex="-1" aria-disabled="true">Reserve a sua viagem</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );


}