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
    <span><NavLink to={"/Filiere"}>Filiere</NavLink></span>
    <span>Activite</span>
    <span>About</span>
    <span>contact</span>
   </div>
   <div className={style.login}>
<span>Login</span>
   </div>
    

        </div>
        <Outlet/>
       
        <footer>
   <span>
    <div className={style.instagram}></div>
         @@Instagram
    </span>
   <span>
    <div className={style.Facebook}></div>
        @@Facebook
    </span>
   <span>
    <div className={style.twitter}></div>
       @@Twitter
    </span>
   <span>
    <div className={style.location}></div>
    @@Localisation
    </span>
   <span>
    <div className={style.contact}></div>
   @@contact
    </span>
</footer>
        </div>


    )
}

export default Header