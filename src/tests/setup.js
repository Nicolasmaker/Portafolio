// src/tests/setup.js
// Configuración global para las pruebas

// Mock de React y ReactDOM para las pruebas
if (typeof require !== 'undefined') {
  global.React = require('react');
  global.ReactDOM = require('react-dom');
}

// Mock de funcionalidades del navegador que podrían no estar disponibles en el entorno de pruebas
global.window = global.window || {};
global.document = global.document || {};

// Mock de localStorage si no está disponible
if (typeof global.localStorage === 'undefined') {
  global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {}
  };
}

// Mock de sessionStorage si no está disponible
if (typeof global.sessionStorage === 'undefined') {
  global.sessionStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {}
  };
}

// Mock de console methods para evitar spam en las pruebas
global.console = global.console || {
  log: () => {},
  error: () => {},
  warn: () => {},
  info: () => {}
};

// Mock de window.location
global.window.location = global.window.location || {
  href: 'http://localhost:3000',
  pathname: '/',
  search: '',
  hash: ''
};

// Mock de window.history para React Router
global.window.history = global.window.history || {
  pushState: () => {},
  replaceState: () => {},
  back: () => {},
  forward: () => {},
  go: () => {}
};

// Mock de window.addEventListener
global.window.addEventListener = global.window.addEventListener || (() => {});
global.window.removeEventListener = global.window.removeEventListener || (() => {});

console.log('✅ Setup de pruebas cargado correctamente');