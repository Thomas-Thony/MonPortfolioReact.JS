import React from "react";
import "../../../styles/Carousel.css";

function CarouselDivers() {
    const logos = [
        {src: "public/assets/arduino-1.svg", alt: "Logo Arduino" },
        {src: "public/assets/python.png", alt: "Logo Python" },
        {src: "public/assets/unity.png", alt: "Logo Unity 2D" },
        {src: "public/assets/androidStudio.png", alt: "Logo Android Studio"},
        {src: "public/assets/arduino-1.svg", alt: "Logo Arduino" },
        {src: "public/assets/python.png", alt: "Logo Python" },
        {src: "public/assets/unity.png", alt: "Logo Unity 2D" },
        {src: "public/assets/androidStudio.png", alt: "Logo Android Studio"},
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
