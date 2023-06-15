import React from 'react'
import style from './Componentes.module.css'

const Servicios = () => {
  return (
    <div  className={style.Servicios}>
      <div id='servicio' className={style.circulo}>
          <div className={style.circulos}>Carpinteria</div>
          <div className={style.circulos}>Plomeria </div>
          <div className={style.circulos}>Electicidad</div>
          <div className={style.circulos}>Pintura</div>
          <div className={style.circulos}>Mantenimietno</div>
      </div>
      <div className={style.texto}>
      <div className={style.textos}>
            <div>
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil...
            </div>
            <div>
              <button className={style.btnText}>Leer mas <ion-icon name="chevron-forward-outline"></ion-icon></button>
            </div>
          </div>
          <div className={style.textos}>
            <div>
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil...
            </div>
            <div>
              <button className={style.btnText}>Leer mas <ion-icon name="chevron-forward-outline"></ion-icon></button>
            </div>
          </div>
          <div className={style.textos}>
            <div>
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil...
            </div>
            <div>
              <button className={style.btnText}>Leer mas <ion-icon name="chevron-forward-outline"></ion-icon></button>
            </div>
          </div>
          <div className={style.textos}>
            <div>
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil...
            </div>
            <div>
              <button className={style.btnText}>Leer mas <ion-icon name="chevron-forward-outline"></ion-icon></button>
            </div>
          </div>
          <div className={style.textos}>
            <div>
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil...
            </div>
            <div>
              <button className={style.btnText}>Leer mas <ion-icon name="chevron-forward-outline"></ion-icon></button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Servicios