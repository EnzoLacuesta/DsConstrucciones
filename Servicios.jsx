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
                Arreglos de carpintería: Somos carpinteros expertos en soluciones duraderas y de calidad.            </div>
            <div>
              <button className={style.btnText}>Leer mas <ion-icon name="chevron-forward-outline"></ion-icon></button>
            </div>
        </div>
        <div className={style.textos}>
            <div>
              Reparaciones en general, Desobtrucciones, hidrolavado de cañerías, instalación de cañerías.
            </div>
            <div>
              <button className={style.btnText}>Leer mas <ion-icon name="chevron-forward-outline"></ion-icon></button>
            </div>
        </div>
        <div className={style.textos}>
            <div>
              Respuesta las 24 horas, trabajos en el día. Instalaciones y obras. Autorizado por UTE. Llame ante una emergencia.
            </div>
            <div>
              <button className={style.btnText}>Leer mas <ion-icon name="chevron-forward-outline"></ion-icon></button>
            </div>
        </div>
        <div className={style.textos}>
            <div>
              Somos Pintores en Montevideo a domicilio. Servicio de pintura de exteriores e interiores, cuidamos de los detalles, acabados profesionales.
            </div>
            <div>
              <button className={style.btnText}>Leer mas <ion-icon name="chevron-forward-outline"></ion-icon></button>
            </div>
        </div>
        <div className={style.textos}>
            <div>
              os encargamos de todos los servicios de mantenimiento que necesites, desde reparaciones básicas hasta tareas más complejas. 
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