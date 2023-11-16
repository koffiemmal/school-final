import style from "../Login/Login.module.css"
const Login =()=>{

    return(

        <div >
<form action="">
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
                    <label htmlFor="age">Age:</label><br />
                    <input type="number" name="age" id="age"  required/>
                </td>
            </tr>
        </tbody>
    </table>
</form>


        </div>
    )
}

export default Login;