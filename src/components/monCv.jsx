import "../styles/monCV.css";

function CV() {
    return (
        <> 
            <p className="presentationCV">
                Vous pouvez consulter et conserver mon CV en cliquant sur le bouton ci-dessous :
            </p>    
            <center>
                <a className="document" href="/CV-Thomas-THONY.pdf" download="CV Thomas THONY.pdf">Télécharger le document PDF</a>
            </center>
            <br />
            <hr />
            <div className="inner">
                <div className="header">
                    <h1>Mes compétences</h1>
                    <h2>Développement Web</h2>
                </div>
                <div className="containerSkills">
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/html.png" alt="Logo HTML 5" className="skill-icon"/>
                            </div>
                            <h3>HTML 5</h3>
                        </div>
                        <p>Le HTML (HyperText Markup Language) est un langage de balisage hypertexte. Ce langage est essentiel pour le développement web moderne, car il permet de créer des applications interactives et réactives, tout en offrant une meilleure compatibilité avec les navigateurs et les appareils mobiles.
                        </p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/css-3.png" alt="Logo CSS 3" className="skill-icon"/>
                            </div>
                            <h3>CSS 3</h3>
                        </div>
                        <p>Le CSS, ou Cascading Style Sheets est un langage de style utilisé pour décrire la présentation d&apos;un document écrit en HTML ou en XML. Il permet aux développeurs de séparer le contenu de la mise en forme. Il est possible d&apos;appliquer des styles avancés tels que les animations, les transitions et les transformations. </p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/js.png" alt="Logo JavaScript" className="skill-icon"/>
                            </div>
                            <h3>Javascript</h3>
                        </div>
                        <p>Le JavaScript, souvent abrégé en JS, est un langage de programmation dynamique qui permet d&apos;ajouter de l&apos;interactivité et des fonctionnalités avancées aux pages web. 
                        En outre, avec l&apos;émergence de bibliothèques et de frameworks tels que React, Angular et Vue.js, JavaScript a évolué pour devenir un outil incontournable dans le développement d&apos;applications web complexes et réactives.
                        </p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/php.png" alt="Logo PHP" className="skill-icon"/>
                            </div>
                            <h3>PHP</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos blanditiis minima, fugiat hic suscipit asperiores eaque omnis tenetur repudiandae quos? Ullam nobis quia odit amet minima. Numquam, cupiditate reiciendis.</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/mysql.png" alt="Logo MySQL" className="skill-icon"/>
                            </div>
                            <h3>MySQL</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos blanditiis minima, fugiat hic suscipit asperiores eaque omnis tenetur repudiandae quos? Ullam nobis quia odit amet minima. Numquam, cupiditate reiciendis.</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/science.png" alt="Logo React.js" className="skill-icon"/>
                            </div>
                            <h3>React.js</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos blanditiis minima, fugiat hic suscipit asperiores eaque omnis tenetur repudiandae quos? Ullam nobis quia odit amet minima. Numquam, cupiditate reiciendis.</p>
                    </div>
                </div>
                <hr />
                <div className="header">
                    <h2>Développement Logiciel</h2>
                </div>
                <div className="containerSkills">
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/arduino-1.svg" alt="Logo Arduino" className="skill-icon"/>
                            </div>
                            <h3>Arduino/C++</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos blanditiis minima, fugiat hic suscipit asperiores eaque omnis tenetur repudiandae quos? Ullam nobis quia odit amet minima. Numquam, cupiditate reiciendis.</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/python.png" alt="Logo Python" className="skill-icon"/>
                            </div>
                            <h3>Python</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos blanditiis minima, fugiat hic suscipit asperiores eaque omnis tenetur repudiandae quos? Ullam nobis quia odit amet minima. Numquam, cupiditate reiciendis.</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/unity.png" alt="Logo JavaScript" className="skill-icon"/>
                            </div>
                            <h3>Unity 2D/C#</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos blanditiis minima, fugiat hic suscipit asperiores eaque omnis tenetur repudiandae quos? Ullam nobis quia odit amet minima. Numquam, cupiditate reiciendis.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CV;