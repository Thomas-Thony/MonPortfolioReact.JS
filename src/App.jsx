import './App.css';
import Accueil from './components/accueil';
import CV from './components/monCv';
import Carte from './components/Cartes/carte';
import Carte2 from './components/Cartes/carte2';
import Navbar from './components/menu';
import MesProjets from './components/mesProjets';
import Certifs from './components/Certifications/certifications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profil from './components/Cartes/profil';
import ProjetsWeb from './components/Projects/projetsWeb';
import ProjetsJS from './components/Projects/projetsJS';
import ProjetsDivers from './components/Projects/projetsDivers';

function App() {
  return (
    <>
<BrowserRouter>
    <div className="gradient-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/monCV" element={<CV />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/carte2" element={<Carte2/>}/>  
          <Route path="/certifs" element={<Certifs />} />
          <Route path="/mesProjets" element={<MesProjets />} />
          <Route path="/monProfil" element={<Profil />} />  
          <Route path="/projetsWeb" element={<ProjetsWeb />} /> 
          <Route path="/projetsJS" element={<ProjetsJS/>} />  
          <Route path="/projetsDivers" element={<ProjetsDivers/>} />   
          <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
        </Routes>
      </div >
  </BrowserRouter>
    </>
  )
}

export default App;