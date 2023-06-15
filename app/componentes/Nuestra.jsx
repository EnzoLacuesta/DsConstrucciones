import React from 'react'
import style from './Componentes.module.css'
const Nuestra = () => {
  return (
    <div className={style.Nuestra}>
      <div className={style.Nuestra1} id='nuestra'>
        NUESTRA EMPRESA
      </div>
      <div className={style.Nuestra2}>
          Párrafo. Haz clic aquí para agregar tu propio texto y editar.
          Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente.
          En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.
      </div>
    </div>
  )
}

export default Nuestra