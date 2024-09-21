import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
const services = [
    {
      title: "Car Tyre Service",
      imageUrl: "/Tyre.jpg",
    },
    {
      title: "Car Brake Service",
      imageUrl: "/Brake.jpg",
    },
    {
        title: "Car Air Conditioning Service",
        imageUrl: "/ac.jpg",
            
    },
    {
        title: "Car Engine Service",
        imageUrl: "/car-engine-repair-services.jpg",
            
    }
  ];
  
export function Services(){
  const navigate=useNavigate();
    return <div>
        <div>

        
        <Navbar/>

        <div className="flex justify-center p-4  text-4xl font-serif">
            <div className="p-1">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
              width="30"
            height="30"
            class="feather feather-settings"
            >
            <circle cx="12" cy="12" r="3"></circle>
            <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 5.1V5a2 2 0 1 1 4 0v.09c.46.1.87.34 1.2.67a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09c-.46.1-.87.34-1.2.67z"
            ></path>
            </svg>

            </div>
        
            <p>Service Available</p>

        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 justify-center m-auto p-20 max-w-4xl">
  {services.map((service, index) => (
    <div key={index} className="relative w-80 h-48">
      <img
        src={service.imageUrl}
        alt={service.title}
        className="w-full h-full object-cover rounded-lg cursor-pointer" 
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center rounded-lg">
        <span className="text-white text-lg font-semibold cursor-pointer" onClick={()=>{
            navigate("/book-service")
        }}>
          {service.title}
        </span>
      </div>
    </div>
  ))}
</div>

    <div className="p-11">

    </div>
    </div>
    <Footer/>
    </div>
}