// src/App.test.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render the App component', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(App), container);
    
    // Verificar que la aplicación se renderiza
    const appContent = container.querySelector('div');
    expect(appContent).toBeTruthy();
  });

  it('should have a header component', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(App), container);
    
    const navbar = container.querySelector('.navbar');
    expect(navbar).toBeTruthy();
  });

  it('should have a main content area', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(App), container);
    
    const main = container.querySelector('main');
    expect(main).toBeTruthy();
  });

  it('should have a footer', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(App), container);
    
    const footer = container.querySelector('footer');
    expect(footer).toBeTruthy();
  });

  it('should display copyright information in footer', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(App), container);
    
    const footerText = container.textContent;
    expect(footerText).toContain('© 2025');
    expect(footerText).toContain('Nicolás Pérez');
    expect(footerText).toContain('Todos los derechos reservados');
  });

  it('should display technology credits in footer', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(App), container);
    
    const footerText = container.textContent;
    expect(footerText).toContain('Desarrollado con');
    expect(footerText).toContain('React y Bootstrap');
  });

  it('should have responsive layout classes', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(App), container);
    
    const flexContainer = container.querySelector('.d-flex');
    expect(flexContainer).toBeTruthy();
    expect(flexContainer.classList.contains('flex-column')).toBe(true);
    expect(flexContainer.classList.contains('min-vh-100')).toBe(true);
  });

  it('should have main with flex-grow class', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(App), container);
    
    const main = container.querySelector('main');
    expect(main.classList.contains('flex-grow-1')).toBe(true);
  });

  it('should have footer with proper responsive class', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(App), container);
    
    const footer = container.querySelector('footer');
    expect(footer.classList.contains('footer-responsive')).toBe(true);
  });
});