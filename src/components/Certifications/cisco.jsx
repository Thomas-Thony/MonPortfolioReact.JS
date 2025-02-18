import * as React from "react";
import "../../styles/cisco.css";

function Cisco() {
    return (
        <>
        <hr/>
            <p className="Description">
                Cisco Networking Academy est un programme de formation à la technologie par le biais de partenariats public-privé, d’un curriculum de qualité et de programmes inclusifs de perfectionnement des effectifs.
            </p>
        <hr/>
        <br/>
            <div className="fonctionImage">
                <img className='certif_cisco' src="/certfs/DigitalAwarenessUpdate20250214-26-b9qz6z.png" alt="Certification Cisco de Thomas THONY" />
                <div className="millieu">
                    <div className="text">
                        <a href="/certfs/DigitalAwarenessUpdate20250214-26-b9qz6z.png" download="Certification_cisco_digital_awarness_Thomas_THONY">Télécharger</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cisco;