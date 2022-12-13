import React from 'react';
import logoAdriatic from '../../LogoAdriatic.svg';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
            <img className="bg-white" src={logoAdriatic} alt="logo" />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
        </button>
    </nav>
  )
}

export default Navigation