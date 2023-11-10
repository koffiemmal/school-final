import Header from "./Components/Layout/HomeLayout/Header";
import Acceuil from "./Components/Pages/Acceuil/Acceuil";
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {

  return (
  <BrowserRouter>
  
  <Routes>

<Route path="/" element={<Header/>}>
  <Route path="/" element={<Acceuil/>}/>



</Route>



  </Routes>
  
  </BrowserRouter>
  )
 
}

export default App;
