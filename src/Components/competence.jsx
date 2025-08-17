import "react";
import "./styles/competence.css";

const Competence = ({langage, image ,description}) => {
    return (
        <>
            <div className="skill-box">
                <div className="skill-title">
                    <div className="imgSkill">
                        <img src={image} alt='Logo langage' className="skill-icon"/>
                    </div>
                        <h3>{langage}</h3>
                    </div>
                        <p>{description}</p>
                </div>
        </>
    );
}

export default Competence;