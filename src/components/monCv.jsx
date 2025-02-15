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
                        <p>Le PHP, ou Hypertext Preprocessor, est un langage de script côté serveur largement utilisé pour le développement web. Il permet de créer des pages web dynamiques en intégrant des fonctionnalités interactives et en facilitant la gestion des bases de données.</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/mysql.png" alt="Logo MySQL" className="skill-icon"/>
                            </div>
                            <h3>MySQL</h3>
                        </div>
                        <p>MySQL est un système de gestion de bases de données relationnelles open source qui permet de stocker, organiser et récupérer des données de manière efficace. Utilisé en collaboration avec des langages de programmation web comme le PHP, MySQL est un langage très efficace pour le développement d&apos;applications web nécessitant une gestion des données. </p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/science.png" alt="Logo React.js" className="skill-icon"/>
                            </div>
                            <h3>React.js</h3>
                        </div>
                        <p>React.js est une bibliothèque JavaScript développée par Facebook, conçue pour faciliter la création d&apos;interfaces utilisateur interactives et dynamiques. En adoptant une approche basée sur des composants, React.js permet aux développeurs de construire des applications web modulaires et réutilisables, ce qui améliore la maintenabilité et la performance des projets.</p>
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
                        <p>Arduino est une plateforme open-source de développement électronique qui permet de concevoir et de programmer facilement des systèmes embarqués. Elle se compose de cartes électroniques équipées d’un microcontrôleur et d’un environnement de programmation simplifié. Grâce à ses nombreuses bibliothèques et à sa compatibilité avec divers capteurs et modules, Arduino est largement utilisé pour le prototypage rapide, l’apprentissage de l’électronique et la création d’objets interactifs..</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/python.png" alt="Logo Python" className="skill-icon"/>
                            </div>
                            <h3>Python</h3>
                        </div>
                        <p>Python est un langage de programmation interprété, polyvalent et facile à apprendre, apprécié pour sa syntaxe claire et concise. Il est utilisé dans de nombreux domaines tels que le développement web, l’intelligence artificielle, l’analyse de données et l’automatisation. Grâce à son vaste écosystème de bibliothèques et à sa forte communauté, Python permet de développer des applications allant des scripts simples aux logiciels complexes, tout en favorisant une approche rapide et efficace de la programmation.</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/unity.png" alt="Logo JavaScript" className="skill-icon"/>
                            </div>
                            <h3>Unity 2D/C#</h3>
                        </div>
                        <p>C# est un langage de programmation orienté objet développé par Microsoft, principalement utilisé pour la création d’applications Windows, de jeux vidéo avec Unity et de solutions web avec .NET. Il se distingue par sa robustesse, sa gestion efficace de la mémoire et ses fonctionnalités modernes adaptées au développement d’applications performantes et sécurisées. Grâce à son intégration dans l’écosystème Microsoft, C# est un choix privilégié pour les entreprises et les développeurs souhaitant concevoir des logiciels professionnels et évolutifs.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CV;