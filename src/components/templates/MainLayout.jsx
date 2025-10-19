// Template: MainLayout
import React from 'react';
import Header from '../organisms/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <main className="main-content flex-grow-1">
        {children}
      </main>
      <footer className="text-center py-3 small text-muted">
        © 2025 Nicolás Pérez · Todos los derechos reservados · Desarrollado con React y Bootstrap
      </footer>
    </div>
  );
};

export default MainLayout;