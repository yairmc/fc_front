import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { fetchUsers } from '../API/apiAuth';
import { fetchEdeleteMail } from '../API/apiMail';

import style from "./userCard.module.css"


const UserCard = ({ item }) => {
    const [user, setUser] = useState("");
    const [info, setInfo] = useState([]);

    const findUser = async () => {
        const users = await fetchUsers();
        let result = users.filter(users => users.id === item.userId)
        setUser(result[0].username);
        setInfo(result[0])
    }
    findUser();

    const deleteClick = async () => {
        await fetchEdeleteMail(item.id);

    }
    return (
        <div className={style.infoConteiner}>
            <p>{user}</p>
            <Link to="/informationUser" className={style.buttonSend} state={{ item, info }}>Mensaje</Link>
        </div>
    )
}

export default UserCard