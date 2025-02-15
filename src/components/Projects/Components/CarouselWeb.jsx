import React from "react";
import "../../../styles/Carousel.css";

function CarouselWeb() {
    const logos = [
        { src: "/assets/html.png", alt: "Logo HTML 5" },
        { src: "/assets/css-3.png", alt: "Logo CSS 3" },
        { src: "/assets/js.png", alt: "Logo Javascript " },
        { src: "/assets/bootstrap.png", alt: "Logo Bootstrap" },
        { src: "/assets/science.png", alt: "Logo React" },
        { src: "/assets/php.png", alt: "Logo PHP " },
        { src: "/assets/mysql.png", alt: "Logo MySQL" },
        { src: "/assets/Looping.svg", alt: "Logo Looping" },
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

export default CarouselWeb;
