import { NavLink } from "react-router-dom";
import style from "../Login/Login.module.css"
const Login =()=>{

    return(

        <div className={style.container}>
<form className={style.formulaire}>
    <table>
        <tbody>
         
            <tr>
                <td>
                    <label htmlFor="email">Email :</label><br />
                    <input type="email" name="email" id="email" required placeholder="example@exxxx.ccc" />
                </td>
            </tr>
          
       
            <tr>
                <td>
                    <label htmlFor="motdepasse">Mot de passe :</label><br />
                    <input type="password" name="motdepasse" id="motdepasse" required placeholder="password.." />
                </td>
            </tr>
            <tr>
               <td>
               <button>Se Connecter</button><br />
               <p>Vous n'avez pas encore de comptes <br />
                 alors <NavLink to={"/signin"}>INSCRIVEZ VOUS!!!</NavLink></p>
               </td>
            </tr>
        </tbody>
    </table>
</form>


        </div>
    )
}

export default Login;