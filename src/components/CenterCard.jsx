import React from 'react'
import { Link } from 'react-router-dom'

import style from './centerCard.module.css'

const CenterCard = ({ item }) => {

    return (        
        <div className={style.infoConteiner}>
            <p>Centro: {item.username}</p>
            <p>Direccion: {item.address}</p>
            <Link className={style.button} to="/informationCenter" state={item}>Donar</Link>
        </div>
        
    )
}


export default CenterCard