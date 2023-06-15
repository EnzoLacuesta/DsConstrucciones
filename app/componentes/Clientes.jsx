import React from 'react'
import style from './Componentes.module.css'


const Clientes = () => {
  return (
    <div className={style.Clientes}>
      <div className={style.Cliente1}>
        CLIENTES FELICES
      </div>
      
      <div className={style.Cliente2}>
        <div className={style.Parrafos1}>
          Párrafo. Haz clic aquí para agregar tu propio texto y editar.
          Aquí puedes contar tu historia y permitir a tus usuarios saber más sobre ti.
          <div className={style.h4}><h4 >Giuliana, Colonia</h4></div>
          
        </div>
        <div className={style.Parrafos2}>
          Párrafo. Haz clic aquí para agregar tu propio texto y editar.
          Aquí puedes contar tu historia y permitir a tus usuarios saber más sobre ti.
          <div className={style.h4}><h4>Enzo, Montevideo</h4></div>          
        </div>
      </div>
    </div>
  )
}

export default Clientes