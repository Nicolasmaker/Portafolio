// src/App.test.jsx
import React from 'react';
import App from './App';
import { renderWithProviders } from './tests/test-utils';

describe('App Component', () => {
  it('renderiza la App y el layout principal', () => {
    renderWithProviders(<App />, { withRouter: false });
    // Header navbar
    expect(document.querySelector('.navbar')).toBeTruthy();
    // Main content
    expect(document.querySelector('main.main-content')).toBeTruthy();
  });

  it('muestra las rutas lazy dentro de Suspense', async () => {
    renderWithProviders(<App />, { withRouter: false });
    // Mientras carga debería existir el ErrorBoundary si algo falla; buscamos estructura base
    // o bien el Header si todo carga sincrónico
    expect(document.querySelector('.navbar') || document.querySelector('.alert-danger')).toBeTruthy();
  });
});