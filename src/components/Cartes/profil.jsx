import "../../styles/profil.css";
import { useRef, useState, useEffect } from "react";
import Modal from 'react-modal';
//Importation des icônes
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Profil() {
  const carteRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (carteRef.current) {
        const rect = carteRef.current.getBoundingClientRect();
        if (e.clientX < rect.left) {
          carteRef.current.classList.add("rotate-left");
          carteRef.current.classList.remove("rotate-right", "rotate-top", "rotate-bottom");
        } else if (e.clientX > rect.right) {
          carteRef.current.classList.add("rotate-right");
          carteRef.current.classList.remove("rotate-left", "rotate-top", "rotate-bottom");
        } else if (e.clientY < rect.top) {
          carteRef.current.classList.add("rotate-top");
          carteRef.current.classList.remove("rotate-left", "rotate-right", "rotate-bottom");
        } else if (e.clientY > rect.bottom) {
          carteRef.current.classList.add("rotate-bottom");
          carteRef.current.classList.remove("rotate-left", "rotate-right", "rotate-top");
        } else {
          carteRef.current.classList.remove("rotate-left", "rotate-right", "rotate-top", "rotate-bottom");
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <center>
      <div className="perspective">
        <div className="carte" ref={carteRef}>
          <img className="carte-image" src="../../../certif.jpg" alt="Certifications" />
          <h2 className="carte-titre">Thomas THONY</h2>
          <p className="carte-texte">
            Passionné par le développement Web, j&apos;apprécie particulièrement le travail d&apos;équipe pour apprendre et être appris par les autres.
          </p>
          <div className="btn_profil">
            <p id="contact" onClick={openModal}>Me contacter</p>
          </div>
        </div>
      </div>
      <Modal className="boiteDialogue"
        isOpen={modalIsOpen}
        overlayClassName="overlay"
        onRequestClose={closeModal}
        contentLabel="Certifications Modal">
        <h2>Me contacter</h2>
        <a href="https://www.linkedin.com/in/thomas-thony" className="lienLinkedIn" target="_blank"><IoLogoLinkedin /> thomas-thony</a>
        <br/>
        <a href="mailto:thomas.thony.69@gmail.com"><PiMicrosoftOutlookLogoFill/> thomas.thony.69@gmail.com</a>
        <br />
        <a href="https://github.com/Thomas-Thony" target="_blank"><FaGithub/> Thomas-Thony</a>
        <br/>
        <br/>
        <center><button onClick={closeModal}>Fermer</button></center>     
    </Modal>
    </center>
  );
}

export default Profil;