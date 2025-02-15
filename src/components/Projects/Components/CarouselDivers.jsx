import React from "react";
import "../../../styles/Carousel.css";

function CarouselDivers() {
    const logos = [
        {src: "/assets/arduino-1.svg", alt: "Logo Arduino" },
        {src: "/assets/python.png", alt: "Logo Python" },
        {src: "/assets/unity.png", alt: "Logo Unity 2D" },
        {src: "/assets/androidStudio.png", alt: "Logo Android Studio"},
        {src: "/assets/arduino-1.svg", alt: "Logo Arduino" },
        {src: "/assets/python.png", alt: "Logo Python" },
        {src: "/assets/unity.png", alt: "Logo Unity 2D" },
        {src: "/assets/androidStudio.png", alt: "Logo Android Studio"},
    ];

    return (
        <section>
            <div className="slider">
                <div className="slider-items">
                    {logos.concat(logos).map((logo, index) => (
                        <img key={index} src={logo.src} alt={logo.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CarouselDivers;
