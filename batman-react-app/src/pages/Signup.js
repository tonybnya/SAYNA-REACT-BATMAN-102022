import React, { useState } from "react";
import '../styles/signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => { 
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <section id="hero">
        <div className="hero-image">
          <div className="container">
            <h1 className="hero-title text-uppercase text-white">Titre h1</h1>
          </div>
        </div>
      </section>
      <section className="inscription">
        <div className="container formulaire">
          <div className="head text-center">
            <h2>Inscription</h2>
            <p>Vous avez déjà un compte ? <Link to="/login">Connectez-vous ici !</Link></p>
          </div>
          <div className="className-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">Votre e-mail ne sera jamais partagé.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input placeholder="Mot de passe" type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup;