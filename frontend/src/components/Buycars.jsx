import CarCard from "./Carcards";
import CarCard2 from "./Cards2";
import Filters from "./Filtercom";
import FilterComponent from "./Filtercomp2";
import Filter from "./Filtercomp2";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

export function Buycars(){
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