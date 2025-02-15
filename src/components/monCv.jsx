import "../styles/monCV.css";

function CV() {
    return (
        <>       
            <center>
                <a className="document" href="/CV-Thomas-THONY.pdf" download="CV Thomas THONY.pdf">Télécharger le document PDF</a>
            </center>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos blanditiis minima, fugiat hic suscipit asperiores eaque omnis tenetur repudiandae quos? Ullam nobis quia odit amet minima. Numquam, cupiditate reiciendis.</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/css-3.png" alt="Logo CSS 3" className="skill-icon"/>
                            </div>
                            <h3>CSS 3</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos blanditiis minima, fugiat hic suscipit asperiores eaque omnis tenetur repudiandae quos? Ullam nobis quia odit amet minima. Numquam, cupiditate reiciendis.</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="imgSkill">
                                <img src="/assets/js.png" alt="Logo JavaScript" className="skill-icon"/>
                            </div>
                            <h3>Javascript</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos blanditiis minima, fugiat hic suscipit asperiores eaque omnis tenetur repudiandae quos? Ullam nobis quia odit amet minima. Numquam, cupiditate reiciendis.</p>
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
                <div className="header">
                    <h2>Développement Logiciel</h2>
                </div>
            </div>
        </>
    );
}

export default CV;