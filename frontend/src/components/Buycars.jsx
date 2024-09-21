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
        <FilterComponent/>
        <div>
            <CarCard2/>
        </div>
        <div className="flex justify-center">
        <div className="flex flex-col justify-center">
      <button onClick={()=>{
        navigate("/cars")
      }} type="button" class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"> <p> view  more  cars </p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
     </button>

      </div>
    </div>
    <Footer/>
    </div>
}