import React from "react";
import room1 from  "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import room4 from "../../assets/room4.jpg";
import room5 from "../../assets/room5.jpg";
import room6 from "../../assets/room6.jpg";

export default function Gallery(){
    return(
        <div>
            <section className="py-8 px-4 mx-auto max-w-screen sm:py-16 lg:px-24 mt-10">
                <div className="max-w-4xl mb-8 lg:mb-16 mr-auto">
                    <h2 className="mb-4 text-white text-4xl font-bold">
                        Explore Our Space
                    </h2>
                    <p className="text-gray-600 text-lg lg:w-1/2">
                        See our comfortable rooms and inviting common areas in the gallery below.
                    </p>
                </div>

                {/* grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 pb-8">
                    <div className="w-full max-w-md">
                        <img className="rounded-3xl" src={room1} alt="" />
                    </div>

                    <div className="w-full max-w-md">
                        <img className="rounded-3xl" src={room2} alt="" />
                    </div>

                    <div className="w-full max-w-md">
                        <img className="rounded-3xl" src={room3} alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 pb-8">
                    <div className="w-full max-w-md">
                        <img className="rounded-3xl" src={room4} alt="" />
                    </div>

                    <div className="w-full max-w-md">
                        <img className="rounded-3xl" src={room5} alt="" />
                    </div>

                    <div className="w-full max-w-md">
                        <img className="rounded-3xl" src={room6} alt="" />
                    </div>
                </div>

            </section>
        </div>
    );
}