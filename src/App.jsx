// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Context
import { ThemeProvider } from './context/ThemeContext';

// Components
import Header from './components/Header';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy loaded views
const HomeView = React.lazy(() => import('./views/HomeView'));
const AboutView = React.lazy(() => import('./views/AboutView'));
const ProjectsView = React.lazy(() => import('./views/ProjectsView'));
const ContactView = React.lazy(() => import('./views/ContactView'));

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Suspense fallback={<Loading message="Cargando página..." />}>
                <Routes>
                  <Route path="/" element={<HomeView />} />
                  <Route path="/about" element={<AboutView />} />
                  <Route path="/projects" element={<ProjectsView />} />
                  <Route path="/contact" element={<ContactView />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;