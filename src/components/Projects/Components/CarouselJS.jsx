import React from "react";
import "../../../styles/Carousel.css";

function CarouselJS() {
    const logos = [
        { src: "/assets/js.png", alt: "Logo Javascript" },
        { src: "/assets/discordjs.png", alt: "Logo Discord.js" },
        { src: "/assets/science.png", alt: "Logo React.js" },
        { src: "/assets/js.png", alt: "Logo Javascript" },
        { src: "/assets/discordjs.png", alt: "Logo Discord.js" },
        { src: "/assets/science.png", alt: "Logo React.js" },
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

export default CarouselJS;
