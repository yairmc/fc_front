import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import "../normalize.css"
import style from "../styles/userMenu.module.css"

import icono from "../img/icono.png"
import salir from "../img/salir.png"
import house from "../img/casa.png"
import Perfil from '../components/perfil'
import grafica from "../img/grafica.png"
import { fetchUsers } from '../API/apiAuth'
import CenterCard from '../components/CenterCard'


const userMenu = () => {
    const [centerList, setCenterList] = useState([]);

    const [show, setShow] = useState(false);

    const createCenterCard = async () => {
        const users = await fetchUsers();
        let result = users.filter(users => users.user === 'centro')
        setCenterList(result)
        if (show) setShow(false)
        else setShow(true);

    }

    return (
        <div className={style.body}>

            <header className={style.header}>
                <div className={style.headerContent}>
                    <p className={style.headerText}>Food Community</p>
                    <img src={icono} alt="icono" />
                </div>
                <Link to="/login"><img src={salir} alt="iconoSalir" /></Link>
            </header>

            <main className={style.main}>
                <Perfil />
                <div className={style.centerContent}>
                    <div className={style.info}>
                        <p>Selecciona un centro de acopio cercano a la cual quieres apoyar</p>
                        <img src={house} alt="casa" />
                    </div>
                    <button className={style.centerButton} onClick={createCenterCard}>Mostrar centros</button>
                    <div className={style.centrosList}>
                        {show ?
                            centerList.map(item => (<CenterCard key={item.id} item={item} />))
                            :
                            <>
                            <img className={style.grafica} src={grafica} alt="imagen" />
                            </>
                        }
                    </div>
                </div>

            </main>
        </div>

    )
}

export default userMenu