import "react";
import "../styles/clavier.css"

const Clavier = ({ alphabet, action }) => {
    return (
        <>
            <div>
                {
                    alphabet.map(
                        (lettre, key) => {
                            return <button
                                        className="bouton_lettre"
                                        key={" clavier_  " + key}
                                        onClick={() => action(lettre)}>
                                        {lettre}
                                    </button>
                        }
                    )
                }
            </div>
        </>
    );
}

export default Clavier;