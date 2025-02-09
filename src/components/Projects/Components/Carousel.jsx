import React from "react";
import "../../../styles/Carousel.css";

function Carousel() {
    const logos = [
        { src: "public/assets/html.png", alt: "Logo HTML 5" },
        { src: "public/assets/css-3.png", alt: "Logo CSS 3" },
        { src: "public/assets/js.png", alt: "Logo Javascript " },
        { src: "public/assets/bootstrap.png", alt: "Logo Bootstrap" },
        { src: "public/assets/science.png", alt: "Logo React" },
        { src: "public/assets/php.png", alt: "Logo PHP " },
        { src: "public/assets/mysql.png", alt: "Logo MySQL" },
        { src: "public/assets/Looping.svg", alt: "Logo Looping" },
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

export default Carousel;
