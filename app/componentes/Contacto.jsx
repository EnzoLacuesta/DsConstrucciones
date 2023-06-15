'use client'
import React from 'react'
import style from './Componentes.module.css'

const ValidarFormulario = ()=>{
  let nombre = document.getElementById("nombre");
  let email = document.getElementById("email");
  let asunto = document.getElementById("asunto")

  let validName = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if(validName.test(nombre.value) && validEmail.test(email.value) && validName.test(asunto.value)){
    alert('Formulario enviado')
    return true;
}else{
    alert('Revise sus datos')
    return false;
}

}

const Contacto = () => {
  return (
    <div className={style.Contacto} id="contacto">
      
      <div className={style.contacto1}>
        <a 
          id='contacto'
          name="contacto"
          className={style.contacto247}>
          CONTACTO 24/7
        </a>
        <div className={style.grid4}>
          <div className={style.contacto4}>
            <p>TELEFONO</p>
            <div className={style.secondDiv}>094-567-891</div>
          </div>
          <div className={style.contacto4}>
            <p>EMAIL</p>
            <div className={style.secondDiv}>info@misitio.com</div>
          </div>   
          <div className={style.contacto4}>
            <p>AREAS DE SERVICIO</p>
            <div className={style.grid6}>
                <div>
                    <div>Barcelona</div>
                    <div>Rodriguez</div>
                    <div>Cataluña</div>
                </div>
                <div>
                    <div>Miraldo</div>
                    <div>Republica</div>
                    <div>Lacuesta</div>   
                </div>

            </div>
          </div>
          <div className={style.contacto4}>
            <p>SIGUENOS</p>
            <div className={style.secondDivIconos}>
              <a href="https://www.instagram.com/daniloarduino/" style={{'color':'white'}}><ion-icon style={{'padding':'0% 2% 0% 0%', 'font-size':'2rem'}} name="logo-instagram"></ion-icon></a>
              <a href="https://www.facebook.com/contrucciones.arduino" style={{'color':'white'}}><ion-icon style={{'padding':'0% 2% 0% 2%', 'font-size':'2rem'}} name="logo-facebook"></ion-icon></a>
              <a href="https://www.facebook.com/contrucciones.arduino" style={{'color':'white'}}><ion-icon style={{'padding':'0% 2% 0% 2%', 'font-size':'2rem'}} name="logo-tiktok"></ion-icon></a>
            </div>
          </div>        
        </div>
      </div>

      <form action='' className={style.contacto2}>
        <p className={style.h1Contacto}>¡PIDE UN PRESUPUESTO!</p>
        <input type="text" id='nombre' className={style.inp} placeholder='Nombre' />
        <input type="text" id='email' className={style.inp} placeholder='Email'/>
        <input type="text" id='asunto' className={style.inp} placeholder='Asunto'/>
        <textarea 
                className={style.textarea} name="" 
                id="" cols="30" rows="10" placeholder='Escribe tu consulta'></textarea>
        <button 
          onClick={ValidarFormulario}
          className={style.btnContacto}>
            ENVIAR
        </button>
      </form>

    </div>
  )
}

export default Contacto