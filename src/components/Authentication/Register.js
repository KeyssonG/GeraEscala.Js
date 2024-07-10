import React, { useState } from "react";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // função para lidar com alteração  do campo de e-mail
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    // função para lidar com alteração do campo de senha 
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    // função que lida com a alteração do campo de confirmação de senha 
    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    // função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas não são as mesmas!');
        }

        // lógica de registro 
        console.log('E-mail', email);
        console.log('Password', password);
    };

    const isFormValid = email !== '' && password !== '' && confirmPassword !== '';

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
                    onChange={handleChangePassword}
                />
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirme a senha</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChangeConfirmPassword}
                />
            </div>
            <button type="submit" disabled={isFormValid}>Registro</button> //botão desativado se os campos não forem válidos
        </form>
    );
};

export default Register;