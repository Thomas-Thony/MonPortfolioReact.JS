import "../styles/monCV.css";

function CV() {
    return (
        <>
        <center>
            <div className="elementscv">
                <img className='cv' src="./CV-Thomas-THONY.png" alt="CV de Thomas THONY" />
                <br />
                <br />
                <div className="telechargement">
                    <a className='document' href="../../public/CV-Thomas-THONY.pdf" download="CV Thomas THONY.pdf">Télécharger le document PDF</a>                          
                </div>
            </div>
        </center>
        </>
    );
}

export default CV;