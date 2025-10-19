// src/views/AboutView.test.jsx
import React from 'react';
import AboutView from './AboutView';
import { renderWithProviders, screen } from '../tests/test-utils';

describe('AboutView Component', () => {
  it('renderiza el contenedor principal y el título', () => {
    renderWithProviders(<AboutView />);
    expect(document.querySelector('.main-container')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Un Poco Sobre Mí');
    expect(screen.getByText('Nicolás Pérez')).toBeInTheDocument();
  });

  it('muestra la sección de habilidades con barras de progreso', () => {
    renderWithProviders(<AboutView />);
    expect(screen.getByText('Mis Habilidades Técnicas')).toBeInTheDocument();
    expect(document.querySelectorAll('.progress-bar').length).toBeGreaterThan(0);
  });

  it('muestra estadísticas de experiencia', () => {
    renderWithProviders(<AboutView />);
    const text = document.body.textContent;
    expect(text).toContain('1+');
    expect(text).toContain('Años de Experiencia');
    expect(text).toContain('10+');
    expect(text).toContain('Proyectos Completados');
    expect(text).toContain('5+');
    expect(text).toContain('Tecnologías Dominadas');
  });
});