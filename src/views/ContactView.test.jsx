// src/views/ContactView.test.jsx
import React from 'react';
import ContactView from './ContactView';

describe('ContactView Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render the ContactView component', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    const mainContainer = container.querySelector('.main-container');
    expect(mainContainer).toBeTruthy();
  });

  it('should display "Ponte en Contacto" heading', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe('Ponte en Contacto');
  });

  it('should have a contact form', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    const form = container.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('should have form fields', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    // Verificar campos del formulario
    const nameField = container.querySelector('input[name="name"]');
    const emailField = container.querySelector('input[name="email"]');
    const subjectField = container.querySelector('input[name="subject"]');
    const messageField = container.querySelector('textarea[name="message"]');
    
    expect(nameField).toBeTruthy();
    expect(emailField).toBeTruthy();
    expect(subjectField).toBeTruthy();
    expect(messageField).toBeTruthy();
  });

  it('should have form labels', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    const labels = container.querySelectorAll('label');
    expect(labels.length).toBeGreaterThanOrEqual(4);
    
    const labelTexts = Array.from(labels).map(label => label.textContent);
    expect(labelTexts).toContain('Tu Nombre *');
    expect(labelTexts).toContain('Tu Email *');
    expect(labelTexts).toContain('Asunto *');
    expect(labelTexts).toContain('Mensaje *');
  });

  it('should have a submit button', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    const submitButton = container.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
    expect(submitButton.textContent).toBe('Enviar Mensaje');
  });

  it('should display contact information', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    const pageText = container.textContent;
    expect(pageText).toContain('Información de Contacto');
    expect(pageText).toContain('tu-email@ejemplo.com');
    expect(pageText).toContain('+56 9 1234 5678');
    expect(pageText).toContain('Santiago, Chile');
  });

  it('should display response time information', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    const pageText = container.textContent;
    expect(pageText).toContain('Horarios de Respuesta');
    expect(pageText).toContain('Lunes a Viernes');
    expect(pageText).toContain('Fines de semana');
  });

  it('should display FAQ section', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    const pageText = container.textContent;
    expect(pageText).toContain('¿Preguntas frecuentes?');
    expect(pageText).toContain('¿Cuánto tiempo toma un proyecto?');
    expect(pageText).toContain('¿Trabajas de forma remota?');
    expect(pageText).toContain('¿Ofreces mantenimiento?');
  });

  it('should have required form fields', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    const requiredFields = container.querySelectorAll('input[required], textarea[required]');
    expect(requiredFields.length).toBeGreaterThanOrEqual(4);
  });

  it('should have proper input types', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    const emailField = container.querySelector('input[name="email"]');
    const nameField = container.querySelector('input[name="name"]');
    
    expect(emailField.type).toBe('email');
    expect(nameField.type).toBe('text');
  });

  it('should have contact icons', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    
    ReactDOM.render(React.createElement(ContactView), container);
    
    // Los iconos están como emojis en el texto
    const pageText = container.textContent;
    expect(pageText).toContain('📧'); // Email icon
    expect(pageText).toContain('📱'); // Phone icon
    expect(pageText).toContain('📍'); // Location icon
    expect(pageText).toContain('💼'); // LinkedIn icon
  });
});