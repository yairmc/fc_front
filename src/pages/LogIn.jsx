import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../hook/useAuth'

import style from '../styles/login.module.css'
import icon from "../img/iconBreakfast.png"


const LogIn = () => {
  let navigate = useNavigate();

  const { changeCredential, handleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = await handleLogin();

    if (auth === 'donador') {
      navigate("/userMenu");
    }
    else if (auth === 'centro') {
      navigate("/centerMenu");
    }
    else {
      alert("El usuario no existe");
    }

  }


  return (
    <div className={style.body}>
      <main className={style.main}>
        <img className={style.icon} src={icon} alt="icono" />

        <div className={style.formContent}>
          <form className={style.form} id="loginForm" onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
              <p>Usuario:</p>
              <input className={style.input} onChange={changeCredential} name="username" type="text" id="username" />
            </div>
            <div className={style.inputContainer}>
              <p>Contraseña:</p>
              <input className={style.input} onChange={changeCredential} name="password" type="password" id="password" />
            </div>

            <div className={style.buttonContainer}>
              <input className={style.buttonLogin} type="submit" value="Ingresar" />
              <Link to="/" className={style.buttonCancel} >Cancelar</Link>
            </div>

            <div className={style.buttonContentLogin}>
              <Link to="/signup" className={style.buttonSignUp} >Registrate</Link>
            </div>
          </form>

        </div>
      </main>
    </div>


  )
}

export default LogIn