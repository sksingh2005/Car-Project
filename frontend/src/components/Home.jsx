import React, { lazy, Suspense } from "react";

// Lazy loaded components
const Footer = lazy(() => import("./Footer"));
const Navbar = lazy(() => import("./Navbar"));
const Trending = lazy(() => import("./Trending"));

export default function Home() {
    return (
        <div id="home">
            <div className="w-full bg-custom-bg bg-cover bg-center h-screen">
                <div className="p-4">
                    {/* Suspense with fallback */}
                    <Suspense fallback={<div>Loading Navbar...</div>}>
                        <Navbar />
                    </Suspense>
                </div>
                <div className="m-4 sm:p-16 text-white font-bold">
                    <div className="text-3xl sm:text-5xl font-serif">
                        <h1>"Find, Book,</h1>
                        <h1>and Drive your Car in</h1>
                        <h1>Just a few easy</h1>
                        <h1>Steps"</h1>
                    </div>
                    <p className="text-lg sm:text-2xl font-bold pt-3">
                        Get the car whenever and wherever you need
                    </p>
                </div>
            </div>
            <div className="m-4 sm:m-10">
                {/* Suspense with fallback */}
                <Suspense fallback={<div>Loading Trending...</div>}>
                    <Trending />
                </Suspense>
            </div>
            {/* Suspense with fallback */}
            <Suspense fallback={<div>Loading Footer...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
}
