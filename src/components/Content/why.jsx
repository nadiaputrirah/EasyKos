import React from 'react';
import kos from "../../assets/kos.png";

const headingStyles = {
    lineHeight: '1.3',
};


export default function Why() {
    return (
        <div>
            <section className="py-8 px-4 mx-auto max-w-screen sm:py-16 lg:px-24 mt-10">
                <div className="grid mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex mr-auto">
                        <img src={kos} alt="kos" className="rounded-tl-3xl rounded-br-3xl h-80"/>
                    </div> 

                    <div className="ml-auto text-right place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-relaxed md:text-4xl xl:text-5xl dark:text-white" style={headingStyles}> 
                            Why Choose Our Boarding House?  
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Experience the convenience and comfort of living at our boarding house with a variety of exclusive benefits. Enjoy high-speed internet, fully furnished rooms, 
                        24/7 security, and a prime location close to essential amenities. We offer flexible leasing options, communal spaces for socializing, and a supportive environment that feels like home.
                        </p>
                        <a href="#" className="text-primary bg-accent font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none">
                            Contact us
                        </a> 
                    </div>               
                </div>
            </section>

        </div>
    );
}
