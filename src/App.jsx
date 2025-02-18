import './App.css';
import Accueil from './components/accueil';
import Ansii from './components/Certifications/ansii';
import Carte from './components/Cartes/carte';
import Carte2 from './components/Cartes/carte2';
import CNIL from './components/Certifications/cnil';
import CV from './components/monCv';
import Navbar from './components/menu';
import MesProjets from './components/mesProjets';
import ProjetsWeb from './components/Projects/projetsWeb';
import ProjetsJS from './components/Projects/projetsJS';
import ProjetsDivers from './components/Projects/projetsDivers';
import Certifs from './components/Certifications/certifications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profil from './components/Cartes/profil';
import AutresCertifs from './components/autresCertifs';
import Cisco from './components/Certifications/cisco';

function App() {
  return (
    <>
<BrowserRouter>
    <div className="gradient-background">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/monCV" element={<CV />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/carte2" element={<Carte2/>}/>  
          <Route path="/certifs" element={<Certifs />} />
          <Route path="/cisco" element={<Cisco/>} />
          <Route path="/autresCertifs" element={<AutresCertifs/>}/>
          <Route path="/ansii" element={<Ansii />} />
          <Route path="/cnil" element={<CNIL />} />
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