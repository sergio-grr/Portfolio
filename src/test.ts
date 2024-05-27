import 'zone.js/testing'; // Incluye Zone.js para las pruebas.
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// Inicializa el entorno de pruebas de Angular.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Encuentra todos los archivos de prueba.
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
