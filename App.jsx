import Navbar from "./components/Navbar";
import React from "react";
import {Routes , Route} from "react-router-dom"
const App = () => {
    return (

         <Routes>
           
           <Route path="/" element={<Navbar/>}>
                <Route path="/signin" element={<h1>Sign in page</h1>}/>
                <Route path="/signup" element={<h1>Sign up page</h1>}/>
           </Route>

         </Routes> 
        
       
    );
}

export default App;