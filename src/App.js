// Importa o React, necessário para renderizar componentes React
import React from 'react';

// Importa componentes do React Router DOM para gerenciar as rotas da aplicação
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa as páginas individuais da aplicação

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EmployeesPage from './pages/EmployeesPage';
import SchedulePage from './pages/SchedulePage';

// Define o componente principal

function App() {
    return (
        // Define o Router para gerenciar as rotas da aplicação
        <Router>
            {/* Componente que engloba toda a aplicação */}
            <div className="App">
                {/* Cabeçalho  comum para todas as páginas, se necessário*/}
                <header>
                    <h1>GeraEscala</h1>
                </header>

                {/*Define as rotas da aplicação*/}

                <Routes>
                    {/*Rota para página inicial*/}
                    <Route path='/' exact Component={HomePage} />
                    {/*Rota para página de login*/}
                    <Route path='/login' exact Component={LoginPage} />
                    {/*Rota para página de registro*/}
                    <Route path='/register' exact Component={RegisterPage} />
                    {/*Rota para página de gestão de funcionários*/}
                    <Route path='/emplyees' exact Component={EmployeesPage} />
                    {/*Rota para página de gestão de escalas*/}
                    <Route path='/schedule' exact Component={SchedulePage} />
                    {/*Adiciona mais rotas conforme necessário para outras funcionalidades */}
                </Routes>
                {/*Rodapé comum para todas as páginas*/}
                <footer style={{ textAlign: 'center' }}>
                    <p>© 2024 Sistema de Gerenciamento de Escalas de Trabalho</p>
                </footer>
            </div>
        </Router>
    )
}

export default App;