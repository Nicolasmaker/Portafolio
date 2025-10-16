// src/components/Header.test.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

// Mock de React Router
const HeaderWithRouter = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

describe('Header Component', () => {
  let container;

  beforeEach(() => {
    // Crear un contenedor DOM para las pruebas
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Limpiar después de cada prueba
    document.body.removeChild(container);
    container = null;
  });

  it('should render the Header component', () => {
    // Renderizar el componente usando React DOM directamente
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HeaderWithRouter), container);
    
    // Verificar que el navbar se renderiza
    const navbar = container.querySelector('.navbar');
    expect(navbar).toBeTruthy();
  });

  it('should display the brand name "Mi Portafolio"', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HeaderWithRouter), container);
    
    // Verificar que el brand está presente
    const brand = container.querySelector('.navbar-brand');
    expect(brand).toBeTruthy();
    expect(brand.textContent).toBe('Mi Portafolio');
  });

  it('should have navigation links', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HeaderWithRouter), container);
    
    // Verificar que los links de navegación están presentes
    const navLinks = container.querySelectorAll('.nav-link');
    expect(navLinks.length).toBeGreaterThan(0);
    
    // Verificar textos específicos de los links
    const linkTexts = Array.from(navLinks).map(link => link.textContent);
    expect(linkTexts).toContain('Inicio');
    expect(linkTexts).toContain('Sobre Mí');
    expect(linkTexts).toContain('Proyectos');
    expect(linkTexts).toContain('Contacto');
  });

  it('should have a toggle button for mobile menu', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HeaderWithRouter), container);
    
    // Verificar que el botón toggle está presente
    const toggleButton = container.querySelector('.navbar-toggler');
    expect(toggleButton).toBeTruthy();
  });

  it('should apply correct CSS classes', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HeaderWithRouter), container);
    
    const navbar = container.querySelector('.navbar');
    expect(navbar.classList.contains('navbar-dark')).toBe(true);
    expect(navbar.classList.contains('navbar-expand-lg')).toBe(true);
  });
});