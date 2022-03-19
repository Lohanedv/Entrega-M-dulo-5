import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./CadastroViagem.css";
import React from "react";

export default () => {
    return (
        <>
            <NavBar />
            <div className="FotoReserva vh-100">
            <br></br>
                <div className="ft card container">
                    <h1>Selecione a data da sua próxima aventura!</h1>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Destino de Viajem</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Morro de Carapicuiba" />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <form>
                        <div class="row">
                            <div class="col">
                                <label for="validationServer05" class="form-label"> Selecione a Data de Inicio</label>
                                <input type="date" class="form-control" placeholder="Data inicio 11/11/11" />
                            </div>
                            <div class="col">
                                <label for="validationServer05" class="form-label">Selecione a Data do Fim</label>
                                <input type="date" class="form-control" placeholder="Data Fim 11/11/11" />
                            </div>
                        </div>
                        <br></br>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Cadastrar</button>
                        </div>
                    </form>
                    <br></br>
                </div>
                
            </div>

            <Footer />



        </>
    );
}