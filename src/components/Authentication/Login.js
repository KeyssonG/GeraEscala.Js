import React, { useState } from "react";
import '../../styles/Authentication.css'


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

    const isFormValid = formState.email !== '' && formState.password !== '';

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
                />
            </div>
            <button type="submit" disabled={isFormValid}>Login</button> 
        </form>
    );
};

export default Login;