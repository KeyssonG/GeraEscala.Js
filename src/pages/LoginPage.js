import React from "react";
import Login from "../components/Authentication/Login";

//Página de login do sistema
function LoginPage() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Administre sua equipe aqui!</h2>
            <Login />
        </div>
    );
}

export default LoginPage;