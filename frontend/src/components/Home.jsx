import { Footer } from "./Footer";
import Navbar from "./Navbar";
import { Trending } from "./Trending";

export function Home(){
    return <div id="#home">
    <div className="  w-full  bg-custom-bg bg-cover bg-center h-screen ">
        <div className="p-4">
            <Navbar/>
        </div>
        <div className="text-5xl font-serif text-white font-bold m-6 sm:p-18">
            <div>
                <h1>"Find, Book, </h1>
                <h1>and Drive your Car in </h1>
                <h1>Just a few easy </h1>
                <h1>Steps"</h1>  
                <p className="text-white text-2xl font-bold pt-3">Get the car whenever and wherever you need</p>

            </div>
           
        </div>
        
    </div>
    <div className="m-10">
        <Trending/>
    </div>
        <Footer/>
    </div>
}