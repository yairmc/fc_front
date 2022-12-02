import style from "../styles/informationUser.module.css"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { fetchEdeleteMail } from "../API/apiMail";

const informationUser = () => {
  let navigate= useNavigate();

  const location=useLocation();
  const user=location.state.info
  const mail=location.state.item

  const deleteClick = async () => {
    await fetchEdeleteMail(mail.id);
    navigate("/centerMenu")

}

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
        <button className={style.buttonCancel} onClick={deleteClick}>Borrar</button>

      </div>
    </div>
  )
}

export default informationUser