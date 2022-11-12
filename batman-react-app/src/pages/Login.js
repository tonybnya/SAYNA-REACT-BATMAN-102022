import React, { useState } from "react";
import '../styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <section id="hero">
        <div class="hero-image">
          <div class="container">
            <h1 class="hero-title text-uppercase text-white"></h1>
          </div>
        </div>
      </section>
      <section class="inscription">
        <div class="container formulaire">
          <div class="head text-center">
            <h2>Connection</h2>
            <p>Vous n'avez pas encore un compte ? <Link to="/signup">Inscrivez-vous ici !</Link></p>
          </div>
          <div class="form-body">
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Identifiant</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Mot de passe"
                />
              </div>
              <div class="d-grid mx-auto">
                <button type="submit">VALIDER</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login;