import React from "react";
import './App.css';
import Aliados from "./components/aliados";
import Partner from "./components/patrocinadores";
import Teammates from "./components/companeros";
import Villian from "./components/villanos";
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className='page'>
    <BrowserRouter>
        
        <div className="toolbar">
        <Link  to={"/"} exact>
            <h2>Home</h2>
            </Link>
            <Link  to={"/aliados"} exact>
            <h2>Allies</h2>
            </Link>
            <Link  to={"/companeros"} exact>
            <h2>Teammates</h2>
            </Link>
            <Link  to={"/villanos"} exact>
            <h2>Enemies</h2>
            </Link>
            <Link  to={"/patrocinadores"} exact>
            <h2>Sponsor</h2>
            </Link>
        </div>

        <Routes>
  <Route path='/' element={ <div className="container">
<div className="main">
            <div className='text'>
                <h1>Captain <span>America</span></h1>
                <h2 >Database</h2>
            </div>
            <img className='mainimage' src='https://www.xtrafondos.com/wallpapers/vertical/pelicula-capitan-america-el-soldado-de-invierno-366.jpg' alt='Logo' />

        </div>
     
    </div>}></Route>
    
      
      
          <Route path="/patrocinadores" element={<Partner />}>

          </Route>
          <Route path="/aliados" element={<Aliados />}>

          </Route>
          <Route path="/companeros" element={<Teammates />}>

          </Route>

          <Route path="/villanos" element={<Villian />}>

          </Route>
         


        </Routes>


     


 
  
  
    </BrowserRouter>
        
</div>
  );
}

export default App;
