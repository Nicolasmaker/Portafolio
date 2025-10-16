// src/views/AboutView.test.jsx
import React from 'react';
import AboutView from './AboutView';

describe('AboutView Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render the AboutView component', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(AboutView), container);
    
    const mainContainer = container.querySelector('.main-container');
    expect(mainContainer).toBeTruthy();
  });

  it('should display "Un Poco Sobre Mí" heading', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(AboutView), container);
    
    const heading = container.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe('Un Poco Sobre Mí');
  });

  it('should display the name "Nicolás Pérez"', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(AboutView), container);
    
    const nameElement = container.querySelector('strong');
    expect(nameElement).toBeTruthy();
    expect(nameElement.textContent).toBe('Nicolás Pérez');
  });

  it('should display skills section', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(AboutView), container);
    
    const skillsHeading = Array.from(container.querySelectorAll('h3'))
      .find(h3 => h3.textContent.includes('Habilidades Técnicas'));
    expect(skillsHeading).toBeTruthy();
  });

  it('should display progress bars for skills', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(AboutView), container);
    
    const progressBars = container.querySelectorAll('.progress-bar');
    expect(progressBars.length).toBeGreaterThan(0);
  });

  it('should display experience statistics', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(AboutView), container);
    
    // Buscar las estadísticas
    const statsCards = container.querySelectorAll('.card .text-center');
    expect(statsCards.length).toBeGreaterThanOrEqual(3);
    
    // Verificar que incluye años de experiencia
    const experienceText = container.textContent;
    expect(experienceText).toContain('1+');
    expect(experienceText).toContain('Años de Experiencia');
  });

  it('should display hobbies information', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(AboutView), container);
    
    // Verificar que se muestran los hobbies
    const hobbiesText = container.textContent;
    expect(hobbiesText).toContain('disfruto hacer deporte');
    expect(hobbiesText).toContain('disfruto ver series');
    expect(hobbiesText).toContain('disfruto de aprender');
  });

  it('should have responsive layout with cards', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(AboutView), container);
    
    const cards = container.querySelectorAll('.card');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should display projects completed statistic', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(AboutView), container);
    
    const statsText = container.textContent;
    expect(statsText).toContain('10+');
    expect(statsText).toContain('Proyectos Completados');
  });

  it('should display technologies mastered statistic', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(AboutView), container);
    
    const statsText = container.textContent;
    expect(statsText).toContain('5+');
    expect(statsText).toContain('Tecnologías Dominadas');
  });
});