// src/views/ContactView.test.jsx
import React from 'react';
import ContactView from './ContactView';
import { renderWithProviders, screen } from '../tests/test-utils';

describe('ContactView Component', () => {
  it('renderiza el contenedor y el encabezado', () => {
    renderWithProviders(<ContactView />);
    expect(document.querySelector('.main-container')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ponte en Contacto');
  });

  it('tiene el formulario y campos requeridos', () => {
    renderWithProviders(<ContactView />);
    expect(document.querySelector('form')).toBeTruthy();
    expect(document.querySelector('input[name="name"]')).toBeTruthy();
    expect(document.querySelector('input[name="email"]').getAttribute('type')).toBe('email');
    expect(document.querySelector('input[name="subject"]')).toBeTruthy();
    expect(document.querySelector('textarea[name="message"]')).toBeTruthy();
    expect(document.querySelectorAll('input[required], textarea[required]').length).toBeGreaterThanOrEqual(4);
  });

  it('incluye etiquetas y botón de enviar', () => {
    renderWithProviders(<ContactView />);
    const labels = Array.from(document.querySelectorAll('label')).map(l => l.textContent);
    expect(labels).toEqual(expect.arrayContaining(['Tu Nombre *', 'Tu Email *', 'Asunto *', 'Mensaje *']));
    expect(screen.getByRole('button', { name: 'Enviar Mensaje' })).toBeInTheDocument();
  });

  it('muestra información de contacto y FAQs', () => {
    renderWithProviders(<ContactView />);
    const text = document.body.textContent;
    expect(text).toContain('Información de Contacto');
    expect(text).toContain('tu-email@ejemplo.com');
    expect(text).toContain('+56 9 1234 5678');
    expect(text).toContain('Santiago, Chile');
    expect(text).toContain('¿Preguntas frecuentes?');
    expect(text).toContain('¿Cuánto tiempo toma un proyecto?');
    expect(text).toContain('¿Trabajas de forma remota?');
    expect(text).toContain('¿Ofreces mantenimiento?');
  });
});