// src/views/ProjectsView.test.jsx
import React from 'react';
import ProjectsView from './ProjectsView';

describe('ProjectsView Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render the ProjectsView component', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const mainContainer = container.querySelector('.main-container');
    expect(mainContainer).toBeTruthy();
  });

  it('should display "Mis Proyectos" heading', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe('Mis Proyectos');
  });

  it('should display filter buttons', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    // Verificar que existen botones de filtro
    const filterButtons = container.querySelectorAll('.btn');
    expect(filterButtons.length).toBeGreaterThan(0);
    
    // Verificar textos de filtros
    const buttonTexts = Array.from(filterButtons).map(btn => btn.textContent);
    expect(buttonTexts).toContain('Todos');
    expect(buttonTexts).toContain('Frontend');
    expect(buttonTexts).toContain('Full Stack');
  });

  it('should display project cards', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const projectCards = container.querySelectorAll('.card');
    expect(projectCards.length).toBeGreaterThanOrEqual(3); // Debe tener al menos los 3 proyectos
  });

  it('should display "Dulce Arte - Tienda Online de Pastelería" project', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const pageText = container.textContent;
    expect(pageText).toContain('Dulce Arte - Tienda Online de Pastelería');
    expect(pageText).toContain('repostería artesanal');
  });

  it('should display "Tienda Online de Tecnología" project', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const pageText = container.textContent;
    expect(pageText).toContain('Tienda Online de Tecnología');
    expect(pageText).toContain('productos tecnológicos');
  });

  it('should display "Portafolio Personal" project', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const pageText = container.textContent;
    expect(pageText).toContain('Portafolio Personal');
    expect(pageText).toContain('completamente responsivo');
  });

  it('should display technology badges for projects', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const badges = container.querySelectorAll('.badge');
    expect(badges.length).toBeGreaterThan(0);
    
    // Verificar que incluye tecnologías específicas
    const badgeTexts = Array.from(badges).map(badge => badge.textContent);
    expect(badgeTexts).toContain('React');
    expect(badgeTexts).toContain('Node.js');
  });

  it('should have project images', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const projectImages = container.querySelectorAll('.card img');
    expect(projectImages.length).toBeGreaterThanOrEqual(3);
  });

  it('should have "Ver Proyecto" buttons', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const projectButtons = Array.from(container.querySelectorAll('.btn'))
      .filter(btn => btn.textContent.includes('Ver Proyecto'));
    expect(projectButtons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have "Código" buttons', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const codeButtons = Array.from(container.querySelectorAll('.btn'))
      .filter(btn => btn.textContent.includes('Código'));
    expect(codeButtons.length).toBeGreaterThanOrEqual(3);
  });

  it('should display CTA section', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ProjectsView), container);
    
    const pageText = container.textContent;
    expect(pageText).toContain('¿Tienes un proyecto en mente?');
    expect(pageText).toContain('Empecemos a trabajar juntos');
  });
});