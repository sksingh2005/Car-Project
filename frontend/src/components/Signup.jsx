import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!username || !password || !firstname || !lastname) {
            setError("All fields are required.");
            return;
        }

        setError(""); // Clear previous errors
        setLoading(true); // Set loading state

        try {
            const response = await axios.post("http://localhost:3000/signup", {
                username,
                password,
                firstname,
                lastname,
            });
            localStorage.setItem('token', response.data.token);
            navigate('/admin');
        } catch (err) {
            setError("Signup failed. Please try again.");
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="h-screen bg-gray-300 flex items-center">
            <div className="bg-white h-[75%] w-[25%] m-auto rounded pt-2">
                <div className="flex flex-col justify-center px-4 text-center pt-5">
                    <p className="font-bold text-2xl pb-2">Sign Up as Admin</p>
                    <p className="text-gray-300">Enter your information to create an account</p>
                </div>
                <div className="pt-2 pl-5 font-semibold">
                    {error && <p className="text-red-500">{error}</p>}
                    <p>First Name</p>
                    <input type="text" placeholder="John" onChange={(e) => setFirstname(e.target.value)} className="border rounded border-slate-500 pb-1 pt-1 w-[90%]" />
                    <p className="pt-2">Last Name</p>
                    <input type="text" placeholder="Doe" onChange={(e) => setLastname(e.target.value)} className="border rounded border-slate-500 pb-1 pt-1 w-[90%]" />
                    <p>Email</p>
                    <input type="email" placeholder="sks@gmail.com" onChange={(e) => setUsername(e.target.value)} className="border rounded border-slate-500 pb-1 pt-1 w-[90%]" />
                    <p className="pt-2">Password</p>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border rounded border-slate-500 pb-1 pt-1 w-[90%]" />
                </div>
                <div className="p-5">
                    <button onClick={handleSignup} type="button" className="text-white bg-gray-700 w-[95%] hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" disabled={loading}>
                        {loading ? "Signing up..." : "Sign up"}
                    </button>
                </div>
            </div>
        </div>
    );
}
