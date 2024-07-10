import React, { useState } from "react";

function Login() {
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    });

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('E-mail:', formState.email);
        console.log('Password:', formState.password);
    }

    const isFormValid = email !== '' && password !== '';

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
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
                    name="password"
                    value={password}
                    onChange={handleChangePassword}
                />
            </div>
            <button type="submit" disabled={isFormValid}>Login</button> //botão desativado se os campos não forem válidos
        </form>
    );
};

export default Login;