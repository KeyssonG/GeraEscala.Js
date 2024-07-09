import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // função para lidar com alteração  do campo de e-mail
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    // função para lidar com alteração do campo de senha 
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    // função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        // lógica de autenticação 
        console.log('E-mail', email);
        console.log('Password', password);
    };

    const isFormValid = email !== '' && password !== '';

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChangeEmail} 
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePassword}
                />
            </div>
            <button type="submit" disabled={isFormValid}>Login</button> //botão desativado se os campos não forem válidos
        </form>
    );
};

export default Login;