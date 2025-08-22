import "react";
import "./styles/contact.css";
import { FaLinkedin, FaEnvelopeOpenText } from 'react-icons/fa'; 

function Contact(){
    return (
        <>
            <center>
            <div className="contact-container">
                Vous pouvez me joindre sur :
                <div className="liens-contact">
                    <a href="https://www.linkedin.com/in/thomas-thony" target="_blank">
                        <center>
                            <FaLinkedin />
                            <h1>LinkedIn</h1>
                        </center>
                    </a>
                    <a className="lien-icone" href="mailto:thomas.thony.69@gmail.com">
                        <FaEnvelopeOpenText />
                        <h1>Mail</h1>
                    </a>
                </div>
            </div>
            </center>
        </>
    );
}

export default Contact;