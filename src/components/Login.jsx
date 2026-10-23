// src/components/Login.jsx
import React, { useState } from 'react';
import { usuariosData } from '../data/data';

export default function Login({ onLoginSuccess }) {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        
        const username = user.trim().toLowerCase();

        // Validación: La contraseña solo debe contener números (Regex)
        if (!/^[0-9]+$/.test(pass)) {
            alert("Error: La contraseña solo puede contener números.");
            return;
        }

        // Validación: Verificar credenciales en el archivo de datos
        if (usuariosData[username] && usuariosData[username].pass === pass) {
            // Pasamos el objeto del usuario autenticado al componente principal (App)
            onLoginSuccess(usuariosData[username]);
        } else {
            alert("Credenciales incorrectas. Intente nuevamente.");
        }
    };

    return (
        <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-md-4 col-sm-8">
                <div className="card shadow p-4 border-0">
                    <div className="text-center mb-3">
                        <h3 className="text-primary fw-bold mb-0">Iniciar Sesión</h3>
                    </div>
                    
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Usuario (ej: admin, cliente)" 
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Contraseña (solo números)" 
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}