import React from 'react'
import style from './Componentes.module.css'
import Link from 'next/link'

const ImgPresupuesto = () => {
  return (
    <div id='inicio' className={style.ImgPresupuesto}>
      <div className={style.llamanos}>
        <div>
          <div>
            <div className={style.p1}>LLÁMANOS HOY</div>
            <div className={style.p2}>LO REPARAMOS TODO</div>          
          </div>
          <div className={style.numeroPresupuesto}>
            094-567-891 
          </div>
        </div>
        <div className={style.contBtn}>
          <button className={style.btnPresupuesto}>PIDE UN PRESUPUESTO GRATIS</button>
        </div>
        <div className={style.ion}>
          <Link href="/">
            <ion-icon 
              style={{
                  'color': '#feda26',
                  'font-size':'5rem',
                      }}
              name="chevron-down-outline">
            </ion-icon>
          </Link>
        
        </div>
      </div>
    </div>
  )
}

export default ImgPresupuesto