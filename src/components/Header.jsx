// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Efecto para manejar el scroll y cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú cuando se cambia de ruta (útil en móviles)
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      variant="light" 
      expand="lg" 
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`navbar-light transition-all ${scrolled ? 'shadow-lg' : ''}`}
      style={{
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff'
      }}
      role="navigation"
      aria-label="Navegación principal"
    >
      <Container fluid>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold"
          onClick={handleNavClick}
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
        >
          Mi Portafolio
        </Navbar.Brand>
        
        {/* Theme Toggle para móvil - visible solo en pantallas pequeñas */}
        <div className="d-flex align-items-center d-lg-none">
          <ThemeToggle variant="header" className="me-2" />
        </div>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          className="border-0"
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={handleNavClick}
              className={`mx-1 ${location.pathname === '/' ? 'fw-bold' : ''}`}
            >
              Inicio
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={handleNavClick}
              className={`mx-1 ${location.pathname === '/about' ? 'fw-bold' : ''}`}
            >
              Sobre Mí
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              onClick={handleNavClick}
              className={`mx-1 ${location.pathname === '/projects' ? 'fw-bold' : ''}`}
            >
              Proyectos
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              onClick={handleNavClick}
              className={`mx-1 ${location.pathname === '/contact' ? 'fw-bold' : ''}`}
            >
              Contacto
            </Nav.Link>
          </Nav>
          
          {/* Theme Toggle - Solo desktop, separado del nav para mejor control */}
          <div className="d-none d-lg-flex align-items-center ms-auto">
            <div className="theme-toggle-divider me-3"></div>
            <ThemeToggle variant="header" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// 👇 La palabra 'default' aquí es la clave
export default Header;