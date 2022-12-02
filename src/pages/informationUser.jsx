import style from "../styles/informationUser.module.css"
import { Link, useLocation } from "react-router-dom"

const informationUser = () => {

  const location=useLocation();
  const user=location.state.info
  const mail=location.state.item

  return (
    <div className={style.body}>
      <div className={style.card}>
        <div className={style.infoUser}>
          <p>{user.username}</p>
          <p>Direccion: {user.address}</p>
          <p>Telefono: {user.celphone}</p>
          <p>Yo Donare: </p>
        </div>
        <div className={style.cardInfo}>
          <p>{mail.mail}</p>
        </div>
        <Link className={style.button} to="/centerMenu" >Return</Link>
      </div>
    </div>
  )
}

export default informationUser