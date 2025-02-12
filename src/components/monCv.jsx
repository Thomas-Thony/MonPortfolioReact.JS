import "../styles/monCV.css";

function CV() {
    return (
        <>
        <div className="elementscv">
           <div className="fonctionImage">        
                <img className='cv' src="./CV-Thomas-THONY.png" alt="CV de Thomas THONY" style={{border: "red 2 solid"}}/>
                <a className='document' href="../../public/CV-Thomas-THONY.pdf" download="CV Thomas THONY.pdf">Télécharger le document PDF</a>                          
            </div>
        </div>
        </>
    );
}

export default CV;