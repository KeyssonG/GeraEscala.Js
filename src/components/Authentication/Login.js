import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticação aqui
        console.log('E-mail:', email);
        console.log('Password:', password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                />
            </div>
            
            <div>
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;