import "react";

const CurrentWord = ({currentWord, lettreUtilisee}) => {
    return (
        <>
            <div>
                {currentWord.split('').map(
                    (lettre, key) => {
                        let status = "trouve"
                        if (lettreUtilisee.indexOf(lettre.toLowerCase()) === -1) {
                            status = "non__trouve";
                        }

                        return <span key={"lettre_" + key} className={status}>
                            {status == "trouve" ? lettre : "_ "}
                        </span>
                    }
                )}
            </div>
        </>
    );
}

export default CurrentWord;