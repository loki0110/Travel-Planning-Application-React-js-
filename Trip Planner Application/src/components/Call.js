import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Signup from "./Signup";
import AboutUs from "./AboutUs";
import PrivacyPolicy from "./PrivacyPolicy";
import ContactUs from "./ContactUs";

 function Call()
{
    return(
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<App/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/App' element={<App/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        
         
       </Routes>
       </BrowserRouter>
    
    );
}
export default Call;