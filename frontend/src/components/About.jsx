import { Caricons } from "./Caricons";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import { FaCar, FaHandshake, FaStar } from 'react-icons/fa'; // Icons from react-icons

export function About(){
    const reviews = [
        {
          name: "Jane Cooper",
          location: "Abuja, Nigeria",
          image: "https://randomuser.me/api/portraits/women/1.jpg", // Sample image
          review: "I had an incredible experience of buying a car from Cars Dealer! The process was seamless, the car was in pristine condition, and the service was top-notch.",
          rating: 5
        },
        {
          name: "Eleanor Pena",
          location: "Lagos, Nigeria",
          image: "https://randomuser.me/api/portraits/men/1.jpg", // Sample image
          review: "I was really impressed with the level of service I received from this car dealer company. The process was smooth and easy, and the car I bought is in excellent condition.",
          rating: 5
        },
        {
          name: "Marvin McKinney",
          location: "Port Harcourt, Nigeria",
          image: "https://randomuser.me/api/portraits/men/2.jpg", // Sample image
          review: "Buying a car truly stood out. From their convenient online booking system to their prompt pickup and drop-off service, everything was convenient and stress-free.",
          rating: 5
        }
      ];
    
    return <div>
        <div className="p-2">
            <Navbar/>
        </div>
        <div className="grid grid-cols-2 p-12">
            <div className="col-span-1">

            </div>
            <div className="col-span-1">
                <div>
                    <p className="text-4xl pb-2 font-serif">About Us</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quo iure numquam amet aut libero, esse facilis officiis! Velit veritatis non sequi enim optio, officia necessitatibus blanditiis fugiat earum ducimus asperiores tempora autem ab quia incidunt laudantium nobis temporibus in quisquam iste. Eum ea architecto debitis officia unde. Reiciendis asperiores accusantium vitae, aperiam sapiente fuga fugit temporibus facere soluta odit possimus a deserunt animi consequuntur quas! Itaque deserunt inventore dolorem aliquam est neque maxime aspernatur ad incidunt, blanditiis, perspiciatis quos at sequi similique mollitia dolores voluptates ipsam porro reprehenderit harum perferendis eos corporis molestiae facilis! Doloribus modi cum perferendis deserunt.
                    </p>
                </div>
            </div>


        </div>
        <div className="pt-4 ">
                <Caricons/>
            </div>
            <div>
            <div className="flex justify-center items-center py-12 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
                    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-base">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    </div>
                    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="text-base">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    </div>
                </div>
                </div>
                <div className="flex justify-center items-center py-12 bg-gray-100">
            <div className="text-center max-w-5xl w-full px-4">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Why You Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Premium Quality */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
                    <FaCar className="text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
                    <p className="text-sm">
                    Our cars are the reason we continue to exist and attract customers. Quality at every touchpoint for the customers is just as important to us as we are a service-first brand.
                    </p>
                </div>
                {/* Transparency */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
                    <FaStar className="text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                    <p className="text-sm">
                    We bring trust by laying bare every available fact about our cars after our stringent vetting process. Our offerings mean that we are in the business of growing and building relationships with our customers.
                    </p>
                </div>
                {/* Trust and Integrity */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
                    <FaHandshake className="text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Trust and Integrity</h3>
                    <p className="text-sm">
                    Trust and integrity are our core values. We ensure transparency, honesty, and fair dealings, providing a trustworthy and reliable experience for every customer at our dealership.
                    </p>
                </div>
                </div>
            </div>
            </div>

            <div className="py-12 bg-gray-100">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say About Us</h2>
                        <p className="text-gray-600">Here are some comments from our customers:</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                        {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                            <img 
                                src={review.image} 
                                alt={review.name} 
                                className="w-12 h-12 rounded-full mr-4" 
                            />
                            <div>
                                <h3 className="text-lg font-bold">{review.name}</h3>
                                <p className="text-gray-500">{review.location}</p>
                            </div>
                            </div>
                            <p className="text-gray-700 mb-4">"{review.review}"</p>
                            <div className="flex">
                            {Array(review.rating).fill().map((_, i) => (
                                <FaStar key={i} className="text-yellow-500" />
                            ))}
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                    <Footer/>
            </div>
    </div>
}