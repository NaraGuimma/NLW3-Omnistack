import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy Smiles" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>
            Visite casas de repouso e mude o dia de muitos(as) vovôs e vovós
          </p>
        </main>
        <div className="location">
          <strong>Guaratinguetá</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/main" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6" />{' '}
        </Link>
      </div>
    </div>
  );
}

export default Landing;
