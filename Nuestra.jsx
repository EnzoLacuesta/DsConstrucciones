import React from 'react'
import style from './Componentes.module.css'
const Nuestra = () => {
  return (
    <div className={style.Nuestra}>
      <div className={style.Nuestra1} id='quienes'>
        NUESTRA EMPRESA
      </div>
      <div className={style.Nuestra2}>
      Desde 2010 desarrollamos actividades de ingeniería, construcción y servicios industriales.
       También brindamos servicios vinculadas al sector forestal,
        actividades de higiene urbana y gestión de residuos y
        , actividades de operación y mantenimiento en el Uruguay.

      </div>
    </div>
  )
}

export default Nuestra