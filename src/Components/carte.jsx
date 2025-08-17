import "react";
import { FaLinkedin, FaGithub, FaGamepad } from "react-icons/fa6";
import { Link } from "react-router-dom";
//import ToastExample from "./toast";
import "./styles/carte.css";

const Carte = ({ prenom, nom, age, role, lienA, lienB }) => {

    return (
        <>
            <div className="cartePersonne">
                <h1 className="identite">{prenom} {nom}</h1>
                <h3 className="age">{age} ans</h3>
                <h2 className="role">{role}</h2>
                <h6 className="description"> En tant qu&apos;étudiant en BTS SIO avec une spécialisation en SLAM, je me sens particulièrement passionné par le développement web, tant en Front-End qu&apos;en Back-End. J&apos;ai acquis des compétences solides dans la création d&apos;interfaces utilisateur attrayantes et fonctionnelles, tout en m&apos;assurant que la logique derrière ces interfaces est tout aussi robuste. Mon expérience avec le framework React m&apos;a permis de développer des applications dynamiques et réactives, offrant une expérience utilisateur fluide et engageante. Je suis convaincu que ma capacité à allier esthétique et fonctionnalité me distingue dans le domaine du développement.</h6>
                <br/>
                {/*<ToastExample/>*/}
                <div className="presentation_cv">
                    <a className="document" href="/assets/CV-Thomas-THONY.pdf" download="CV_Thomas_THONY.pdf">
                        Voir mon parcours
                    </a>
                </div>
                <div className="reseauxSociaux">
                    <a href={lienA}><FaLinkedin /></a>
                    <Link to="/jeu"><FaGamepad /></Link>
                    <a href={lienB}><FaGithub/></a>
                </div>    
            </div>
        </>
    );
}

export default Carte;