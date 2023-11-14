import Header from "./Components/Layout/HomeLayout/Header";
import Acceuil from "./Components/Pages/Acceuil/Acceuil";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Filiere from "./Components/Pages/Filiere/Filiere";
import Cours from "./Components/Pages/Cours/Cours";
import Activite from "./Components/Pages/Activite/Activite";



function App() {

  return (
  <BrowserRouter>
  
  <Routes>

<Route path="/" element={<Header/>}>
  <Route path="/" element={<Acceuil/>}/>

  <Route path="Filiere" element={<Filiere/>}/>
  <Route path="Cours" element={<Cours/>}/>
  <Route path="Activite" element={<Activite/>}/>

</Route>





  </Routes>
  
  </BrowserRouter>
  )
 
}

export default App;
