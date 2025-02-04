import "../../styles/profil.css";
import { useRef, useState, useEffect } from "react";
import Modal from 'react-modal';

function Profil() {
  const carteRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (carteRef.current) {
        const rect = carteRef.current.getBoundingClientRect();
        const xCenter = rect.left + rect.width / 2;
        const yCenter = rect.top + rect.height / 2;

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
          <div className="btn">
            <p id="contact" onClick={openModal}>Me contacter</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certifications Modal">
        <h2>Me contacter</h2>
        <button onClick={closeModal}>Fermer</button>
        {/* Ajoutez le contenu de votre boîte de dialogue ici */}
      </Modal>
    </center>
  );
}

export default Profil;
