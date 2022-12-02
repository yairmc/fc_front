import style from "../styles/centerMenu.module.css";
import icono from "../img/icono.png";
import { Link } from 'react-router-dom'

import salir from "../img/salir.png"
import users from "../img/usuarios.png";
import Perfil from '../components/perfil'
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

import UserCard from "../components/UserCard";
import { fetchGetMail } from "../API/apiMail";
import { fetchUsers } from "../API/apiAuth";



const centerMenu = () => {
  const [userList, setUserList] = useState([]);
  const { userData } = useContext(AuthContext)
  const { username } = userData

  const [show, setShow] = useState(false);


  const createUserCard = async () => {
    const mails = await fetchGetMail();
    let result = mails.filter(mails => mails.center === username);
    setUserList(result);
    if (show) setShow(false)
    else setShow(true)
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

        <div className={style.donadores}>
          <div className={style.info}>
            <p>Lista de Donadores con sus mensajes</p>
            <img src={users} alt="usuarios" />
          </div>
          <button className={style.userButton} onClick={createUserCard}>Mostrar Donadores</button>
          <div className={style.donadoresList}>
            {show ?
              userList.map(item => (<UserCard key={item.id} item={item} />))
              :
              <>
              </>
            }

          </div>
        </div>

      </main>
    </div>
  )
}

export default centerMenu