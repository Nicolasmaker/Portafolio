// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ProjectsView from './views/ProjectsView';
import ContactView from './views/ContactView';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/projects" element={<ProjectsView />} />
            <Route path="/contact" element={<ContactView />} />
          </Routes>
        </main>
        
        {/* Footer responsivo */}
        <footer className="footer-responsive text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <p className="mb-1 text-responsive">
                  © 2025 <strong>Nicolás Pérez</strong>. Todos los derechos reservados.
                </p>
                <p className="mb-0 small text-muted">
                  Desarrollado con ❤️ usando React y Bootstrap
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;