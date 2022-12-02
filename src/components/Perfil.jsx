import React, { useState, useContext } from 'react'
import style from "./perfil.module.css"
import AuthContext from '../context/AuthContext'


import triangle from "../img/triangulo.png";

const Perfil = () => {
    const [show, setShow] = useState(false)

    const { userData } = useContext(AuthContext)
    const { user, username, address, celphone, timeStart, timeEnd } = userData

    const handleShow = async () => {
        if (show) setShow(false)
        else setShow(true);
    }

    return (
        <>
            <div className={style.perfilContent}>
                <div className={style.name} id="namePerfil">
                    <p>Bienvenido</p>
                    <p>{username}</p>
                </div>
                <div className={style.openPerfil} id="openPerfil">
                    <button className={style.triangle} onClick={handleShow}><img src={triangle} alt="icono" /></button>
                </div>
            </div>

            {show ?

                <div className={style.perfil}>
                    <p className={style.type} id="rolUser">{user}</p>
                    <p id="celphone">Telefono: {celphone}</p>
                    <p id="address">Direccion: {address}</p>
                    {timeStart !== 0 ?
                        <p>Horario: De {timeStart} a {timeEnd}</p>
                        :
                        <></>
                    }
                </div>
                :
                <></>
            }
        </>
    )
}

export default Perfil