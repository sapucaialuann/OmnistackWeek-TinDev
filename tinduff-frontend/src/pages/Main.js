import React, { useEffect, useState } from 'react';
import './main.css';
import logo from '../assets/logo.svg';
import likes from '../assets/likes.png';
import dislikes from '../assets/dislikes.png';
import api from '../services/api';


export default function Main({ match }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadusers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })

            setUsers(response.data)
        }

        loadusers();
    }, [match.params.id])

    async function handleLike(id) {
        console.log('like', id)
    }
    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id },
        })

        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (                
                        <li key={user._id}>
                            <img src={user.avatar} className="cardImage" alt="nome" />
                            <div className="lettersPadding">
                                <div className="CardInfo">
                                    <strong>{user.name}</strong>
                                    <p>{user.bio}</p>
                                </div>
        
                                <div className="actionButtons">
                                    <button type="button" onClick={() => handleDislike(user._id)}>
                                        <img className="actionButtonsImage" src={dislikes} alt="Dislike" />
                                    </button>
                                    <button type="button" onClick={() => handleLike(user._id)}>
                                        <img className="actionButtonsImage" src={likes} alt="like" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="empty"> Cabo </div>
            ) }
        </div>
    )
}


//parei em 1:15:21. usar yarn dev no backend e yarn start no react. o layout ainda está meio cagado