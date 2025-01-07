import React, { useEffect, useRef } from 'react';
import './heroSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLongArrowAltRight } from "react-icons/fa";



import { DotLottieReact } from '@lottiefiles/dotlottie-react';



// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const containerRef = useRef(null);
    const heroLeftRef = useRef(null);
    const heroRightRef = useRef(null);

    useEffect(() => {
        // GSAP animations
        const tl = gsap.timeline({
            defaults: { duration: 1, ease: 'power3.out' },
        });

        // Hero left section animation
        tl.fromTo(
            heroLeftRef.current,
            { x: '-100%', opacity: 0 },
            { x: '0%', opacity: 1 }
        );

        // Hero right section animation
        tl.fromTo(
            heroRightRef.current,
            { x: '100%', opacity: 0 },
            { x: '0%', opacity: 1 },
            '-=0.5' // Overlap timing with the left section
        );

        // Background fade-in
        gsap.fromTo(
            containerRef.current.querySelector('.absolute'),
            { opacity: 0 },
            { opacity: 0.5, duration: 2 }
        );
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-cover bg-center h-screen flex flex-col lg:flex-row hero"
            id="hero"
        >

            <div className="absolute inset-0"></div>

            <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-16 flex items-center flex-col lg:flex-row w-full">
                {/* Left Section */}
                <div
                    ref={heroLeftRef}
                    className="w-full lg:w-1/2 text-center lg:text-left space-y-6 hero_left relative"
                >


                    <div className='hero_left_desing'>
                        <DotLottieReact
                            src="https://lottie.host/13577692-e727-4522-b0c7-2ac063c147ad/9yRu7fgxQF.lottie"
                            loop
                            autoplay
                        />
                    </div>
                    <h1 className="text-5xl sm:text-6xlleading-tight mb-4 hero_heading">
                        <span className="hero_heading_imp">Tasty Food</span> Welcome to The Culinary Haven
                    </h1>
                    <p className="text-gray-600">
                        Savor the best dishes crafted with love and passion for your tastebuds. From fresh
                        ingredients to expert chefs, we bring you an unforgettable dining experience.
                    </p>

                    <div className="space-x-4 space-y-2 mt-6">
                        <a
                            href="/register"
                            className="hero_btn primary_btn  text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 w-56 flex justify-center items-center"
                        >
                            Register
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div
                    ref={heroRightRef}
                    className="hero-right w-full lg:w-1/2 mt-8 lg:mt-0 relative"
                >


                    <div className="hero_right_child relative">
                        <div className="hero_right_desing">
                            {/* <DotLottieReact
                    src="https://lottie.host/b3a3835f-2dd0-41e7-b601-e9505ff3be1a/Ri04zY5YcM.lottie"
                    loop
                    autoplay
                /> */}
                        </div>
                        {/* <img
                            src="./images/hero_b.png"
                            alt="Dish 1"
                            className="hero_img w-full object-contain"
                            height={100}
                            width={100}
                        /> */}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default HeroSection;
