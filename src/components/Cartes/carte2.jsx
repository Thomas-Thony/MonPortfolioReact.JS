import "../../styles/carte2.css"
import {Link} from 'react-router-dom';


function Carte2(){
    return(
        <>
        <div className="card">
            <img className="card-image" src="../../../certif.jpg" alt=""></img> 
            <h2 className="card-titre">Mes certifications</h2>
            <p className="card-texte">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, adipisci quibusdam doloremque maiores quaerat tenetur ad, tempora corrupti earum quam quisquam repellat sed quidem eos quasi aperiam facilis maxime quia.</p>
            <center>
                <div className="btn">
                    <Link to="/certifs"><p>Voir mes certifications</p></Link>
                </div>
            </center>
        </div>
        </>
    );
}

export default Carte2;