import React, { useState } from 'react';
import './login.css';
import logo from '../assets/logo.svg';

import api from '../services/api';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        //testar se está funcionando as linhas do input
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { _id } = response.data

        console.log(response);
        
        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tindev" />
                <input 
                placeholder="digite seu usuário no github"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    ); 
}



//parei no minuto 35:22,usamos o react router-dom, como previsto!
//não esquecer de iniciar o servidor com yarn dev (no backend)
//também não esquecer do yarn start no frontend
