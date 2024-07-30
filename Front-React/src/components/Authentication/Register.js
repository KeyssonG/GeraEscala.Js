import React, { useState } from "react";
import axios from "axios";
import '../../styles/Authentication.css';

function Register() {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [message, setMessage] = useState("");
    const [isSucess, setIsSucess] = useState(false);

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formState.password !== formState.confirmPassword) {
            setMessage('As senhas não coincidem.');
            setIsSucess(false);
            return;
        }

        try {
            const  response = await axios.post('http://localhost:3001/register', formState);
            setMessage(response.data.message);
            setMessage("usuário cadastrado com sucesso!")
            setIsSucess(true);
        } catch (error){
            setMessage(error.response.data.message || "Erro ao registrar o usuário.");
            setIsSucess(false);
        }
    };

    const isFormValid = formState.email !== '' && formState.password !== '' && formState.confirmPassword !== '';

    return (
        <div className="container">
            <div className="register-form">
                <h2>Registro</h2>
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
                        <label htmlFor="password">Senha</label>
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
                    <button type="submit" disabled={!isFormValid}>Registro</button>
                </form>

                {message && (
                    <p className={isSucess ? "sucess-message": "error-message"}>
                        {message}
                    </p>
                )

                }


                <div className="login-link">
                    <p>Já tem uma conta? <a href="#">Login</a></p>
                </div>
            </div>
            <div className="welcome-message">
                <h1>Bem-vindo!</h1>
                <p>Por favor, registre-se para continuar</p>
            </div>
        </div>
    );
}

export default Register;
