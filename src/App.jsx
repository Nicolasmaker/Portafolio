// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Context
import { ThemeProvider } from './context/ThemeContext';

// Components
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import MainLayout from './components/templates/MainLayout';

// Lazy loaded pages (Atomic Design)
const HomePage = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/About'));
const ProjectsPage = React.lazy(() => import('./pages/Projects'));
const ContactPage = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <MainLayout>
            <Suspense fallback={<Loading message="Cargando página..." />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </MainLayout>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;