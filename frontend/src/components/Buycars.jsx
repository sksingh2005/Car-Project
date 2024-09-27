
import { lazy } from "react";
const Footer=lazy(()=>import("./Footer"))
const CarCard2=lazy(()=>import("./Cards2"))
const Navbar=lazy(()=>import("./Navbar"))
export default function Buycars(){
    return <div id="">
        <div className="pt-2">
            <Navbar/>
        </div>
        <div>
            <CarCard2/>
        </div>
        
    <Footer/>
    </div>
}