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
                <Link 
                  className={style.Link}
                  href="/">INICIO</Link>
              </li>
              <li>
                <Link 
                  className={style.Link}
                  href="/">SERVICIOS</Link>
              </li>
              <li className={style.li3}>
                <Link 
                  className={style.Link}
                  href="/">QUIENES SOMOS</Link>
              </li>
              <li className={style.li4}>
                <Link 
                  className={style.Link}
                  href="/">CONTACTO</Link>
              </li>
          </ul>
        </div>
        <div className={style.numeros}>094 567 891</div>
    </div>
  )
}

export default Nav