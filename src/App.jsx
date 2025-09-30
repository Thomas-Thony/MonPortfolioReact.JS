import './App.css';
import Header from "./Components/utils/header.jsx";
import NonTrouve from './Components/utils/404.jsx';
import Footer from './Components/utils/footer.jsx';
import Carte from './Components/carte.jsx';
import Contact from './Components/contact.jsx';
import Experiences from './Components/experiences.jsx';
import Projets from './Components/projets/projets.jsx';
import Certifications from './Components/certifications/certifications.jsx';
import Apropos from './Components/apropos.jsx';
import Jeu from './Components/jeu/jeu.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
      <>
        <BrowserRouter>
          <div id='gradient'>  
          <Header />
            <div className="container">
              <Routes>
              {/*Liens du header*/}
                <Route path="/" element={<Carte prenom="Thomas" nom="Thony" age="18" role="Développeur Full-Stack" lienA={"https://linkedin.com/in/thomas-thony"} lienB={"https://github.com/Thomas-Thony"} />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/experiences" element={<Experiences/>} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<Contact/>}/>
                {/*Autres liens de composants*/}
                <Route path="/jeu" element={<Jeu />} />
                <Route path="*" element={<NonTrouve/>} />
              </Routes>
            </div>
            <Footer/>
          </div>
          </BrowserRouter>
      </>
    );
}

export default App;