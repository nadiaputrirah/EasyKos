import React from 'react';
import banner from "../../assets/banner.jpg";

const jumbotronStyles = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'multiply',
};

const headingStyles = {
    lineHeight: '1.3',
};

export default function Jumbotron() {
    return (
        <div>
            <section className="bg-center bg-no-repeat bg-cover bg-blend-multiply" style={jumbotronStyles}>
                <div className="px-24 max-w-screen-xl py-24 lg:py-56">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-8">
                            <h1 className="mb-4 text-2xl font-bold text-white md:text-5xl lg:text-6xl" style={headingStyles}>
                                Where Comfort Supports Your Academic Journey
                            </h1>
                            <p className="mb-8 text-lg text-gray lg:text-lg">
                                A comfortable and strategically located living space, thoughtfully designed to enhance your academic journey and everyday life, making it easier for you to thrive both in and out of the classroom.
                            </p>
                            <a href="/about-us" className="text-primary bg-accent font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
