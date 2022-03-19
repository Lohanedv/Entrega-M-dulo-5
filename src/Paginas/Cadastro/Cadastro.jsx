import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import React from "react";
import "./Cadastro.css";

export default () => {
  return (
    <>
      <NavBar />
      <div className="Imagem vh-100">

        <div className="Cad card container">
          <h1>Cadastre-se</h1>
          <h3>Faça o seu login para reservar uma viagem</h3>
          <form class=" cadNome row g-3">
            <div class="col-md-6">
              <label for="validationServer01" class="form-label">Primeiro Nome</label>
              <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required />
              <div class="valid-feedback">
                Muito Bem!
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationServer02" class="form-label">Sobrenome</label>
              <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required />
              <div class="valid-feedback">
              </div>
            </div>
          </form>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="validationServer03" class="form-label">Cidade</label>
              <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
              <div id="validationServer03Feedback" class="invalid-feedback">
                Informe a sua cidade.
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationServer04" class="form-label">Estado</label>
              <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required >
                <option selected disabled value="">Escolha...</option>
                <option>...</option>
              </select>
              <div id="validationServer04Feedback" class="invalid-feedback">
                Informar o seu Estado
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationServer05" class="form-label">Telefone de contato direto</label>
              <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
              <div id="validationServer05Feedback" class="invalid-feedback">
                Preferência pra um telefone com WhathsApp.
              </div>
            </div>
          </form>
          <form class="row g-3">
            <div class="col-md-7">
              <label for="validationServerUsername" class="form-label">Email</label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend3">Email</span>
                <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                <div id="validationServerUsernameFeedback" class="invalid-feedback">
                  Por favor coloque um email válido.
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <label for="validationServer01" class="form-label">Defina uma senha</label>
              <input type="Password" class="form-control is-valid" id="validationServer01" value="" required />
              <div class="valid-feedback">
                Muito Bem!
              </div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input is-invalid center" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                <label class="form-check-label" for="invalidCheck3">
                  Aceite os termos antes de enviar o formulário.
                </label>
                <div id="invalidCheck3Feedback" class="invalid-feedback ">
                  Se os seus dados estiverem corretos, entraremos em contato com você. Confira antes de Enviar.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}