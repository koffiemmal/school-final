import { NavLink } from "react-router-dom";
import style from "../SignIN/Signin.module.css"

const Signin=()=>{

    return(

        <div className={style.container}>
<form className={style.formulaire}>
    <table>
        <tbody>
            <tr>
                <td>
                    <label htmlFor="nom">Nom:</label><br />
                    <input type="text" id="nom" name="nom" placeholder="Nom..." required />
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="prenom">Prenom :</label><br />
                    <input type="text" id="prenom" name="prenom" placeholder="Prenom ..." required />
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="email">Email :</label><br />
                    <input type="email" name="email" id="email" required placeholder="example@exxxx.ccc" />
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="age">Age:</label><br />
                    <input type="number" name="age" id="age"  required/>
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="Pays">Pays</label><br />

                    <select name="Pays" id="Pays" required>
                        <option value="">...</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Benin">Benin</option>
                        <option value="Tchad">Tchad</option>
                        <option value="Togo">Togo</option>
                        <option value="Nigéria">Nigéria</option>
                        <option value="Burkina-Faso">Burkina-Faso</option>
                    </select>
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
               <button>S'inscrire</button>
               <p>Vous avez deja un compte ?<br /> alors <NavLink to={"/Login"}>GO VOUS CONNECTEZ!!!!</NavLink></p>
               </td>
            </tr>
        </tbody>
    </table>
</form>


        </div>
    )


}

export default Signin;