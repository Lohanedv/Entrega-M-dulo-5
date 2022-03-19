import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import React from "react";
import "./Contato.css";

export default () => {
    return (
        <>
            <NavBar />

            <div className="Foto vh-100">

                <div className="Cont card container">
                    <h1>Contate-nos</h1>
                    <h3>Duvidas ou sugestões.</h3>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nome</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Por Exemplo: João Borges" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Telefone</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Por Exemplo: (11) 98989-9898" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <form class="was-validated">
                        <div class="mb-3">
                            <label for="validationTextarea" class="form-label">Texto</label>
                            <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Exemplo: Tem acampamentos fora do país?" required></textarea>
                            <div class="invalid-feedback">
                                Por favor, informe a sua solicitação.
                            </div>
                        </div>
                        </form>
                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input" id="validationFormCheck1" required/>
                                <label class="form-check-label t" for="validationFormCheck1">Permitir que um agente de viagens entre em contato com você?</label>
                                <div class="invalid-feedback">Example invalid feedback text</div>
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary">Enviar</button>
                        </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
