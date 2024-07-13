// Importa o React, necessário para renderizar componentes React
import React from 'react';
// Importa o ReactDOM, responsável por renderizar os componentes no DOM
import ReactDOM from 'react-dom';

import '../src/styles/main.css'
// Importa o componente principal App, que será renderizado na aplicação 
import App from './App';


// Renderiza o componente principal App, na página HTML
ReactDOM.render(
  // Componente React.StricMode envolve o App para identificar práticas inseguras durante o desenvolvimento
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Localiza o elemento id 'root' no arquivo public/index.html e renderiza App dentro dele
  document.getElementById('root')
);