// src/views/HomeView.test.jsx
import React from 'react';
import HomeView from './HomeView';
import { renderWithProviders, screen } from '../tests/test-utils';

describe('HomeView Component', () => {
  it('renderiza el contenedor principal y el título', () => {
    renderWithProviders(<HomeView />);
    expect(document.querySelector('.main-container')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Hola, soy/i);
    expect(screen.getByText('Nicolás Pérez')).toBeInTheDocument();
  });

  it('muestra las badges de tecnologías', () => {
    renderWithProviders(<HomeView />);
    expect(document.querySelectorAll('.badge').length).toBeGreaterThan(0);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('tiene los botones de acción', () => {
    renderWithProviders(<HomeView />);
    expect(screen.getByText('Ver mis Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Contáctame')).toBeInTheDocument();
  });

  it('muestra la imagen de perfil', () => {
    renderWithProviders(<HomeView />);
    const img = document.querySelector('.profile-image');
    expect(img).toBeTruthy();
    const alt = img.getAttribute('alt') || '';
    expect(alt).toEqual(expect.stringContaining('Nicolás Pérez'));
  });
});