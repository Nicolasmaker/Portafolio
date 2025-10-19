// Utilidades de testing para envolver con proveedores comunes
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';

export function renderWithProviders(ui, { route = '/', routerProps = {}, withRouter = true, ...options } = {}) {
  window.history.pushState({}, 'Test page', route);
  const Wrapper = ({ children }) => (
    <ThemeProvider>
      {withRouter ? (
        <MemoryRouter initialEntries={[route]} {...routerProps}>
          {children}
        </MemoryRouter>
      ) : (
        children
      )}
    </ThemeProvider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';