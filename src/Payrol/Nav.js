import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Payrol from "./Payrol"
import Notfoundpage from "./Notfoundpage"


const Nav = () => {
  return (
    <div>
        
        <Routes>
            <Route>
                <Route path="/" element={<Home />}></Route> 
                <Route path="payrol" element={<Payrol/>}></Route> 
                <Route path="*" element={<Notfoundpage/>}></Route> 
            </Route>
        </Routes>

        

        
    </div>
  )
}

export default Nav