import React from 'react';
import Logo from '../../assets/logo.png';


export const Navbar = () => {
    return (
        <>
          <nav >
            <a href="#home">
                 <img src={Logo} width="80rem" className="__navbar_logo"  alt="logo_fiat"/>

            </a>
              <ul className="__navbar_items">
                    <li> <a href="#home"> MODELOS</a></li>
                    <li> <a href="#home">PRUEBAS DE MANEJO</a> </li>
                    <li> <a href="#home">COTIZAR</a> </li>
                    <li> <a href="#home">PROMOCIONES</a> </li>
                    <li className="__navbar_item_not" > <a href="#home"> DISTRIBUIDORES</a></li>
                  <li className="__navbar_sidebar_toggle">
                    <i className="fas fa-bars"></i>
                  </li>

              </ul>
          </nav>  
        </>
    )
}
