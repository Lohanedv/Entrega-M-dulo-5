import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import React from "react";
import "./Destino.css";

export default () => {
  return (
    <>
      <NavBar />

      <div className="container Dest mw-100 mh-100">
        <h1 className="center">Destinos Imperdíveis...</h1>
        <br>
        </br>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card-1 h-100">  
               <h5 class="card title-top">Varanda das Nuvens</h5>
              <img class="img-top"/>
              <div class="card-body1">
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div class="card-footer">
                <small class="card text-muted">Reserve a data da viagem <a href="http://localhost:3000/CadastroViagem" > AQUI</a></small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card-2 h-100">
            <h5 class="card title-top">Pôr do Sol de Monte Reis</h5>
              <img class="img-top"/>
              <div class="card-body1">
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div class="card-footer">
                <small class="card text-muted">Reserve a data da viagem <a href="http://localhost:3000/CadastroViagem" > AQUI</a></small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card-3 h-100">
            <h5 class="card title-top">Colinas Sul</h5>
              <img class="img-top"/>
              <div class="card-body1">
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div class="card-footer">
                <small class="card text-muted">Reserve a data da viagem <a href="http://localhost:3000/CadastroViagem" > AQUI</a></small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card-4 h-100">
            <h5 class="card title-top">Montanha do Sol Pelado</h5>
              <img class="img-top"/>
              <div class="card-body1">
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div class="card-footer">
                <small class="card text-muted">Reserve a data da viagem <a href="http://localhost:3000/CadastroViagem" > AQUI</a></small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card-5 h-100">
            <h5 class="card title-top">Pátio do Céu estrelado</h5>
              <img class="img-top"/>
              <div class="card-body1">
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div class="card-footer">
                <small class="card text-muted">Reserve a data da viagem <a href="http://localhost:3000/CadastroViagem" > AQUI</a></small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card-6 h-100">
            <h5 class="card title-top">Morro do Rio Longo</h5>
              <img class="img-top"/>
              <div class="card-body1">
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div class="card-footer">
                <small class="card text-muted">Reserve a data da viagem <a href="http://localhost:3000/CadastroViagem" > AQUI</a></small>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <h3 className="info">Para saber mais destinos disponíveis, entre em contato com os nossos <a href="http://localhost:3000/Contato"> agentes de viagens. </a></h3>
      </div>
      <Footer />
    </>
  );
}


