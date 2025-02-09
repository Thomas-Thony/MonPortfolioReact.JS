import React from "react";
import "../../../styles/Carousel.css";

function CarouselJS() {
    const logos = [
        { src: "public/assets/js.png", alt: "Logo Javascript" },
        { src: "public/assets/discordjs.png", alt: "Logo Discord.js" },
        { src: "public/assets/science.png", alt: "Logo React.js" },
        { src: "public/assets/js.png", alt: "Logo Javascript" },
        { src: "public/assets/discordjs.png", alt: "Logo Discord.js" },
        { src: "public/assets/science.png", alt: "Logo React.js" },
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
