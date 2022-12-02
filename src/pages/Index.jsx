import { Link } from 'react-router-dom'
import React from 'react'
import style from '../styles/inicio.module.css'
import icon from '../img/icono.png'
import img1 from "../img/image 6.png"
import img2 from "../img/image 5.png"
import img3 from "../img/image 7.png"
import img4 from "../img/image 11.png"
import img5 from "../img/image 12.png"

const Index = () => {
  return (
    <div className={style.body}>
      <main className={style.main}>

        <div className={style.imagesInicio}>
          <img src={img1} alt="icono" />
          <img src={img2} alt="icono" />
          <img src={img3} alt="icono" />
          <img src={img4} alt="icono" />
          <img src={img5} alt="icono" />
          <img src={img2} alt="icono" />
        </div>

        <div className={style.text}>
          <div className={style.title}>
            <p className={style.titleText}>Food Community </p>
            <img src={icon} alt="icono" />
          </div>
          <p>Nuestro objetivo es hacer llegar los recursos a todas partes.
            Nosotros conectamos con los centros de acopio y hacemos mas facil el proceso de donacion.</p>
          <p>La accion de donar comida es combatir la desnutrición en aquellas personas que no pueden acceder a una
            alimentación de cierta calidad</p>
          <div className={style.contentButton}>
            <Link to='/login' className={style.button}>Donar</Link>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Index