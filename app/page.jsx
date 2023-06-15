import styles from './page.module.css'
import Nav from './componentes/Nav'
import ImgPresupuesto from './componentes/ImgPresupuesto'
import Servicios from './componentes/Servicios'
import Nuestra from './componentes/Nuestra'
import Clientes from './componentes/Clientes'
import Contacto from './componentes/Contacto'

export default function Home() {
  return (
    <main className={styles.main}>
        <Nav></Nav>
        <ImgPresupuesto></ImgPresupuesto>
        <Servicios></Servicios>
        <Nuestra></Nuestra>
        <Clientes></Clientes>
        <Contacto></Contacto>
    </main>
  )
}
