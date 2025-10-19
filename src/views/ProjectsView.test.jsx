// src/views/ProjectsView.test.jsx
import React from 'react';
import ProjectsView from './ProjectsView';
import { renderWithProviders, screen } from '../tests/test-utils';

describe('ProjectsView Component', () => {
  it('renderiza el contenedor y el encabezado', () => {
    renderWithProviders(<ProjectsView />);
    expect(document.querySelector('.main-container')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Mis Proyectos');
  });

  it('muestra botones de filtro', () => {
    renderWithProviders(<ProjectsView />);
    const btns = Array.from(document.querySelectorAll('.btn')).map(b => b.textContent);
    expect(btns).toEqual(expect.arrayContaining(['Todos', 'Frontend', 'Full Stack']));
  });

  it('muestra tarjetas de proyectos e información clave', () => {
    renderWithProviders(<ProjectsView />);
    expect(document.querySelectorAll('.card').length).toBeGreaterThanOrEqual(3);
    const text = document.body.textContent;
    expect(text).toContain('Dulce Arte - Tienda Online de Pastelería');
    expect(text).toContain('Tienda Online de Tecnología');
    expect(text).toContain('Portafolio Personal');
  });

  it('muestra badges de tecnologías e imágenes', () => {
    renderWithProviders(<ProjectsView />);
    expect(document.querySelectorAll('.badge').length).toBeGreaterThan(0);
    expect(document.querySelectorAll('.card img').length).toBeGreaterThanOrEqual(3);
  });

  it('muestra la sección de CTA', () => {
    renderWithProviders(<ProjectsView />);
    const text = document.body.textContent;
    expect(text).toContain('¿Tienes un proyecto en mente?');
    expect(text).toContain('Empecemos a trabajar juntos');
  });
});