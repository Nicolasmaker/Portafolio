// src/components/Header.test.jsx
import React from 'react';
import Header from './Header';
import { renderWithProviders } from '../tests/test-utils';

describe('Header Component', () => {
  it('renderiza el navbar y el brand', () => {
    renderWithProviders(<Header />);
    expect(document.querySelector('.navbar')).toBeTruthy();
    const brand = document.querySelector('.navbar-brand');
    expect(brand).toBeTruthy();
    expect(brand.textContent).toBe('Mi Portafolio');
  });

  it('tiene enlaces de navegación', () => {
    renderWithProviders(<Header />);
    const navLinks = document.querySelectorAll('.nav-link');
    expect(navLinks.length).toBeGreaterThan(0);
    const texts = Array.from(navLinks).map(l => l.textContent);
    expect(texts).toEqual(expect.arrayContaining(['Inicio', 'Sobre Mí', 'Proyectos', 'Contacto']));
  });

  it('incluye el botón toggler para móvil', () => {
    renderWithProviders(<Header />);
    expect(document.querySelector('.navbar-toggler')).toBeTruthy();
  });

  it('aplica clases de Bootstrap esperadas', () => {
    renderWithProviders(<Header />);
    const navbar = document.querySelector('.navbar');
    expect(navbar.classList.contains('navbar-light')).toBe(true);
    expect(navbar.classList.contains('navbar-expand-lg')).toBe(true);
  });
});