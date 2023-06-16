import Link from 'next/link';
import React from 'react'
import style from './Componentes.module.css'


let nav = [
  {
    label: "INICIO",
    herf:""
  },  
  {
    label: "SEVICIOS",
    herf:""
  },
  {
    label: "QUIENES SOMOS",
    herf:""
  },  
  {
    label: "CONTACTO",
    herf:""
  }];

const Nav = () => {

  return (
    <div className={style.Nav}>
        <div>
          <h1 className={style.h1ContactoNav}>DS CONSTRUCTORA</h1>
        </div>
        <div >
          <ul className={style.linkNav}>
              <li>
                <a
                  className={style.Link}
                  href="#">INICIO
                </a>
              </li>
              <li>
                <a 
                  className={style.Link}
                  href="#servicio">SERVICIOS
                </a>
              </li>
              <li className={style.li3}>
                <a 
                  className={style.Link}
                  href="#quienes">QUIENES SOMOS
                </a>
              </li>
              <li className={style.li4}>
                <a 
                  className={style.Link}
                  href="#contacto">CONTACTO
                </a>
              </li>
          </ul>
        </div>
        <div className={style.numeros}>094 567 891</div>
    </div>
  )
}

export default Nav