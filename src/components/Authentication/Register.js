import React, { useState } from "react";
import '../../styles/Authentication.css'

function Register() {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.password !== formState.confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }
    }

    // lógica de registro 
    console.log('E-mail', formState.email);
    console.log('Password', formState.password);


    const isFormValid = formState.email !== '' && formState.password !== '' && formState.confirmPassword !== '';

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChangeInput}
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChangeInput}
                    required
                />
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirme a senha</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formState.confirmPassword}
                    onChange={handleChangeInput}
                    required
                />
            </div>
            <button type="submit" disabled={isFormValid}>Registro</button> //botão desativado se os campos não forem válidos
        </form>
    );
}

export default Register;