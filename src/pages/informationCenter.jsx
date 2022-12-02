import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import style from "../styles/informationCenter.module.css"
import {fetchSendMail} from "../API/apiMail"

const informationCenter = ({item}) => {

    const[ mensaje, setMensaje]=useState("")

    const { userData } = useContext(AuthContext)
    // const { user, username, address, celphone, timeStart, timeEnd } = userData

    const location=useLocation();
    const { username, address, celphone, timeStart, timeEnd}=location.state;
    
    let navigate = useNavigate();

    const handleChange=(e)=>{
        e.preventDefault();
        const msj=e.target.value
        setMensaje(msj)
    }
    const handleClick= async ()=>{
        const mail={
            mail:mensaje,
            userId:userData.id,
            center:username
        }
        const send=await fetchSendMail(mail)
        if (send==="Message Send"){
            alert("Mensaje Enviado");
            navigate('/userMenu')
        }else{
            alert("Error al enviar el mensaje");
        }
    }

    return (
        <div className={style.body}>
            <main className={style.main}>
                <div className={style.informationCenter}>
                    <p className={style.name}>Centro {username}</p>
                    <p>Horario: De {timeStart}am A {timeEnd} pm</p>
                    <p>Direccion: {address}</p>
                    <p>Telefono:{celphone}</p>
                    <p>Yo Donare:</p>
                    <input className={style.input} onChange={handleChange} type="text" id="donacion" />
                    <div className={style.buttonContainer}>
                        <button  className={style.buttonSend} onClick={handleClick}>Mensaje</button>
                        <Link className={style.buttonCancel} to="/userMenu">Cancelar</Link>
                    </div>
                </div>

                <div className={style.warning}>
                    <div className={style.textContainer}>
                        <p className={style.titleWarning}>Alimentos no recomendables</p>
                        <p className={style.text}>Galletas y dulces en general, azúcar conservas de guisos poco saludables cereales de
                            desayuno patés </p>

                        <p className={style.titleWarning}>Alimentos recomendables</p>
                        <p className={style.text}>Conservas de legumbres y verduras al natural como guisantes, garbanzos, espárragos,
                            champiñones, …
                            Conservas de carne, pescado y moluscos al natural o en aceite de oliva, panes secos, como biscotes o
                            colines
                            leche,
                            caldos en tetrabrik frutos secos como nueces, cacahuetes, almendras, avellanas,…
                            Frutas secas o deshidratadas como pasas, dátiles, ciruelas, orejones,…</p>

                        <p className={style.titleWarning}>También son buenas opciones</p>
                        <p className={style.text}>Las pastas y los cereales como el arroz, los copos de avena, macarrones, espaguetis,
                            fideos…
                            No obstante, una vez te decides a donar lo mejor es siempre preguntar directamente a las
                            organizaciones
                            encargadas de la recolecta para saber de primera mano cuáles son los alimentos necesarios en ese
                            momento
                            y
                            lugar.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default informationCenter