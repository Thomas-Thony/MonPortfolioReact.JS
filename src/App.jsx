import './App.css';
import Header from "./components/utils/Header.jsx";
import Footer from './components/utils/footer.jsx';
import Carte from './components/carte.jsx';
import Contact from './components/contact.jsx';
import Projets from './components/projets.jsx';
import Apropos from './components/apropos.jsx';
import Jeu from './components/jeu/jeu.jsx';
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
                <Route path="/apropos" element={<Apropos/>} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/contact" element={<Contact/>}/>
                {/*Autres liens de composants*/}
                <Route path="/jeu" element={<Jeu />} />
                <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
              </Routes>
            </div>
            <Footer/>
          </div>
          </BrowserRouter>
      </>
    );
}

export default App;