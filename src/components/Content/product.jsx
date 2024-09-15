import React, { useState } from 'react';
import kos1 from "../../assets/kos1.png";
import kos2 from "../../assets/kos2.png";
import kos3 from "../../assets/kos3.png";
import kos4 from "../../assets/kos4.png";
import kos5 from "../../assets/kos5.png";
import kos6 from "../../assets/kos6.png";
import kos7 from "../../assets/kos7.png";
import kos8 from "../../assets/kos8.png";

export default function Product() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 4;

    const cards = [
        { img: kos1, title: "Green Haven House", description: "A cozy boarding house perfect for students and young professionals.", address:"Jl. Dr. Angka No. 14, Purwokerto", price:"IDR 1,200,000/month" },
        { img: kos2, title: "Serene Nest House", description: "Modern living space with essential amenities for a student lifestyle.", address:"Jl. Bunyamin No. 27, Purwokerto", price:"IDR 1,500,000/month" },
        { img: kos3, title: "Harmony House", description: "Stylish rooms in a peaceful, well-connected environment.", address:"Jl. Isdiman No. 10, Purwokerto", price:"IDR 1,300,000/month" },
        { img: kos4, title: "Oasis Boarding House", description: "A lively boarding house in a bustling area.", address:"Jl. Dr. Suharso No. 5, Purwokerto", price:"IDR 1,400,000/month" },
        { img: kos5, title: "Tranquil Retreat", description: "A quiet and comfortable space ideal for relaxation.", address:"Jl. Gerilya No. 3, Purwokerto", price:"IDR 1,100,000/month" },
        { img: kos6, title: "Urban Living Kos", description: "A modern boarding house with easy access to the city center.", address:"Jl. Soedirman No. 18, Purwokerto", price:"IDR 1,600,000/month" },
        { img: kos7, title: "Cozy Corner House", description: "A warm and welcoming boarding house for long-term stays.", address:"Jl. DI Panjaitan No. 21, Purwokerto", price:"IDR 1,250,000/month" },
        { img: kos8, title: "The Study Lodge", description: "A quiet environment tailored for students.", address:"Jl. Ahmad Yani No. 9, Purwokerto", price:"IDR 1,350,000/month" },
    ];

    {/* Handle the previous button click */}
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - cardsPerPage : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - cardsPerPage ? 0 : prevIndex + 1
        );
    };

    return (
        <div>
            <section className="relative py-36 lg:py-24 mx-auto max-w-screen px-24">
                <h1 className="text-3xl text-center font-bold mb-2 text-white pt-10">Affordable Living Spaces</h1>
                <p className="text-center text-gray-500 max-w-lg mx-auto text-lg mb-10">
                    Comfortable and modern living spaces designed for students.
                </p>
                <div className="relative overflow-hidden">
                    {/* Cards Container */}
                    <div 
                        className="flex transition-transform duration-500 px-3"
                        style={{ transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)` }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="flex-none w-full sm:w-1/2 md:w-1/4 p-4"
                            >
                                <div className="bg-primary rounded-lg shadow-lg overflow-hidden">
                                    <img src={card.img} alt={card.title} className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                                        <p className="text-gray-500 mb-2">{card.description}</p>
                                        <p className="text-gray-500 mb-2">{card.address}</p>
                                        <h2 className="text-lg text-gray-400 font-medium mb-4">{card.price}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Slider controls */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-0 z-9 flex items-center justify-center w-12 h-12 bg-secondary rounded-full text-white shadow-lg transform -translate-y-1/2 hover:bg-accent focus:outline-none"
                    >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-0 z-9 flex items-center justify-center w-12 h-12 bg-secondary rounded-full text-white shadow-lg transform -translate-y-1/2 hover:bg-accent focus:outline-none"
                    >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
