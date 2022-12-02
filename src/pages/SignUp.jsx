import React, { useState } from 'react'

import style from '../styles/signUp.module.css'

import icon from "../img/iconBreakfast.png"
import { Link, useNavigate } from 'react-router-dom'
import {  fetchSignUp } from '../API/apiAuth'


const SignUp = () => {
    let navigate=useNavigate();

    const [data, setData] = useState({ user: "", username: "", password: "", address: "", celphone: 0, timeStart: 0, timeEnd: 0 })

    const changeData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const signUp= await fetchSignUp(data);
        if (signUp==='signUp success') {
            alert("Registro Exitoso");
            navigate('/login')
        }else{
            alert("Error en los datos")
        }
    }

    return (
        <div className={style.body}>
            <main className={style.container}>
                <div className={style.formContent}>

                    <img src={icon} alt="icono" className={style.icon} />

                    <form className={style.form} id="signUpForm" onSubmit={handleSubmit}>

                        <div className={style.inputContainer}>
                            <p>Usuario:</p>
                            <div className={style.cbContent}>
                                <p>Donador</p>
                                <input name="user" value="donador" className={style.cb} type="checkbox" id="donador" onChange={changeData} />
                                <p>Centro</p>
                                <input name="user" value="centro" className={style.cb} type="checkbox" id="centro" onChange={changeData} />
                            </div>
                        </div>

                        <div className={style.inputContainer}>
                            <p>Nombre:</p>
                            <input className={style.input} name="username" type="text" id="newUsername" onChange={changeData} />
                        </div>
                        <div className={style.inputContainer}>
                            <p>Contraseña:</p>
                            <input className={style.input} name="password" type="text" id="newPassword" onChange={changeData} />
                        </div>
                        <div className={style.inputContainer}>
                            <p>Contraseña:</p>
                            <input className={style.input} type="text" id="repeatPassword" />
                        </div>
                        <div className={style.inputContainer}>
                            <p>Direccion:</p>
                            <input className={style.input} name="address" type="text" id="address" onChange={changeData} />
                        </div>
                        <div className={style.inputContainer}>
                            <p>Telefono:</p>
                            <input className={style.input} name="celphone" type="tel" id="celphone" onChange={changeData} />
                        </div>
                        <div className={style.inputContainer}>
                            <p>Horario</p>
                            <div className={style.timeContainer}>
                                <p>de:</p>
                                <input className={style.input} name="timeStart" type="number" id="timeStart" onChange={changeData} />
                                <p>a:</p>
                                <input className={style.input} name="timeEnd" type="number" id="timeEnd" onChange={changeData} />
                            </div>

                        </div>

                        <div className={style.buttonContainer}>
                            <input className={style.buttonSignup} type="submit" value="Ingresar" />
                            <Link to="/login" className={style.buttonCancel}>Cancelar</Link>
                        </div>

                    </form>

                </div>
            </main>
        </div>

    )
}

export default SignUp