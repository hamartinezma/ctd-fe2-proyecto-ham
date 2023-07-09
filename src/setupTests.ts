import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { server } from './mocks/server';
beforeAll(() => server.listen());

// Reiniciamos los manejadores del servidor después de cada prueba
afterEach(() => server.resetHandlers());

// Cerramos el servidor simulado después de todas las pruebas
afterAll(() => server.close());

// Asignamos el módulo React al objeto global 'React'
global.React = React;

//Profe, creo que esto no lo tuvo en cuenta en la calificación!!