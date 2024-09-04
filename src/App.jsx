import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header/Header';
import Section from './componentes/section/Section';
import Temporada from './componentes/temporada/Temporada'; 
import Aside from './componentes/aside/Aside';

const App = () => (
  <Router>
    <Header className="header"/>
    <div className='main-container'>
    <Routes>
      <Route path="/" element={<Section tipoContenido="home" />} />
      <Route path="/temporada/:numero" element={<Section tipoContenido="temporada" />} />
      <Route path="/episodio/:id" element={<Section tipoContenido="episodio" />} />
    </Routes>
    <Aside />
    </div>
  </Router>

);

export default App;

