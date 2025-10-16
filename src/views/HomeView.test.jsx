// src/views/HomeView.test.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeView from './HomeView';

const HomeViewWithRouter = () => (
  <BrowserRouter>
    <HomeView />
  </BrowserRouter>
);

describe('HomeView Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render the HomeView component', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HomeViewWithRouter), container);
    
    const mainContainer = container.querySelector('.main-container');
    expect(mainContainer).toBeTruthy();
  });

  it('should display the name "Nicolás Pérez"', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HomeViewWithRouter), container);
    
    const nameElement = container.querySelector('.text-primary');
    expect(nameElement).toBeTruthy();
    expect(nameElement.textContent).toBe('Nicolás Pérez');
  });

  it('should display the main heading', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HomeViewWithRouter), container);
    
    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Hola, soy');
  });

  it('should display the professional description', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HomeViewWithRouter), container);
    
    const description = container.querySelector('.lead');
    expect(description).toBeTruthy();
    expect(description.textContent).toContain('desarrollador Full-Stack');
  });

  it('should have action buttons', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HomeViewWithRouter), container);
    
    const buttons = container.querySelectorAll('.btn');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
    
    // Verificar que los botones tienen el texto correcto
    const buttonTexts = Array.from(buttons).map(btn => btn.textContent);
    expect(buttonTexts).toContain('Ver mis Proyectos');
    expect(buttonTexts).toContain('Contáctame');
  });

  it('should display technology badges', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HomeViewWithRouter), container);
    
    const badges = container.querySelectorAll('.badge');
    expect(badges.length).toBeGreaterThan(0);
    
    // Verificar que incluye tecnologías específicas
    const badgeTexts = Array.from(badges).map(badge => badge.textContent);
    expect(badgeTexts).toContain('React');
    expect(badgeTexts).toContain('JavaScript');
  });

  it('should have a profile image', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HomeViewWithRouter), container);
    
    const profileImage = container.querySelector('.profile-image');
    expect(profileImage).toBeTruthy();
    expect(profileImage.getAttribute('alt')).toBe('Foto de perfil');
  });

  it('should be responsive with proper column classes', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(HomeViewWithRouter), container);
    
    const columns = container.querySelectorAll('[class*="col-"]');
    expect(columns.length).toBeGreaterThan(0);
  });
});