import Header from "./Components/Layout/HomeLayout/Header";
import Acceuil from "./Components/Pages/Acceuil/Acceuil";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Filiere from "./Components/Pages/Filiere/Filiere";
import Cours from "./Components/Pages/Cours/Cours";
import Activite from "./Components/Pages/Activite/Activite";
import ChatMy from "./Components/Pages/Chat/ChatMy";
import Chat from "./Components/Pages/Chat/Chat";
import Login from "./Components/Pages/Login/Login";
import Signin from "./Components/Pages/SignIN/Signin";



function App() {

  return (
  <BrowserRouter>
  
  <Routes>

<Route path="/" element={<Header/>}>
  <Route path="/" element={<Acceuil/>}/>

  <Route path="Filiere" element={<Filiere/>}/>
  <Route path="Cours" element={<Cours/>}/>
  <Route path="Activite" element={<Activite/>}/>
<Route path="Chat" element={<Chat/>}/>
<Route path="Login" element={<Login/>}/>
<Route path="Signin" element={<Signin/>}/>

</Route>






  </Routes>
  
  </BrowserRouter>
  )
 
}

export default App;
