import {NavLink} from "react-router-dom";
import { Outlet } from "react-router-dom";
import style from "../HomeLayout/Header.module.css"
import { useNavigate } from "react-router-dom";


const Header =()=>{
    
    return(
<div>
        <div className={style.header}>
   <div className={style.logoEcole}></div>

   <div className={style.navbar}>
<span className={style.acceuil} ><NavLink to={"/"}>Acceuil</NavLink></span>
    <span>Filiere</span>
    <span>Activite</span>
    <span>About</span>
    <span>contact</span>
   </div>
   <div className={style.login}>
<span>Login</span>
   </div>
    

        </div>
        <Outlet/>
        </div>

    )
}

export default Header