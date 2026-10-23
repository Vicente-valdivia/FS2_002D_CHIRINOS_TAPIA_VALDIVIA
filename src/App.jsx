// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { proyectosData, tareasData } from './data/data';

export default function App() {
    // Estado para almacenar el usuario autenticado (null si no ha iniciado sesión)
    const [usuarioActivo, setUsuarioActivo] = useState(null);

    // Función que se ejecuta al iniciar sesión exitosamente
    const handleLoginSuccess = (datosUsuario) => {
        setUsuarioActivo(datosUsuario);
    };

    // Función para cerrar sesión y limpiar el estado
    const handleLogout = () => {
        setUsuarioActivo(null);
    };

    return (
        <div className="bg-light min-vh-100">
            {/* Si el usuario ha iniciado sesión, mostramos la barra de navegación superior */}
            {usuarioActivo && <Navbar onLogout={handleLogout} />}

            <main className="container pb-5">
                {/* Renderizado condicional basado en el estado de autenticación y rol */}
                {!usuarioActivo ? (
                    <Login onLoginSuccess={handleLoginSuccess} />
                ) : (
                    <div>
                        {/* VISTA CLIENTE */}
                        {usuarioActivo.vista === 'vista-cliente' && (
                            <div>
                                <h2 className="mb-3 text-primary">Bienvenido Cliente</h2>
                                <p className="text-muted">Estado actual de tus campañas contratadas:</p>
                                <div className="row">
                                    {proyectosData.map((p) => (
                                        <div className="col-md-6 mb-3" key={p.codigo}>
                                            <div className="card p-3 shadow-sm border-0 border-start border-4 border-primary bg-white">
                                                <h6 className="fw-bold text-dark">{p.nombre}</h6>
                                                <p className="mb-1 text-muted">{p.cliente}</p>
                                                <p className="mb-0">Estado: <span className="badge bg-primary">{p.estado}</span></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* VISTA DIRECTOR */}
                        {usuarioActivo.vista === 'vista-director' && (
                            <div>
                                <h2 className="mb-4 text-success">Tablero del Director</h2>
                                <h4 className="mb-2">Listado General de Proyectos</h4>
                                <div className="table-responsive bg-white shadow-sm p-3 rounded">
                                    <table className="table table-hover align-middle">
                                        <thead className="table-success">
                                            <tr>
                                                <th>Código</th><th>Nombre</th><th>Cliente</th><th>Presupuesto</th><th>Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {proyectosData.map((p) => (
                                                <tr key={p.codigo}>
                                                    <td><strong>{p.codigo}</strong></td>
                                                    <td>{p.nombre}</td>
                                                    <td>{p.cliente}</td>
                                                    <td>${p.presupuesto}</td>
                                                    <td><span className="badge bg-secondary">{p.estado}</span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* VISTA ESPECIALISTA */}
                        {usuarioActivo.vista === 'vista-especialista' && (
                            <div>
                                <h2 className="mb-3 text-warning">Área de Especialistas</h2>
                                <h5 className="mb-3">Tareas Asignadas al Equipo</h5>
                                <ul className="list-group shadow-sm">
                                    {tareasData.map((t) => (
                                        <li className="list-group-item d-flex justify-content-between align-items-center py-3" key={t.id}>
                                            <span><strong>{t.especialista}</strong> — {t.tarea} ({t.proyecto})</span>
                                            <span className="badge bg-info text-dark">Prioridad: {t.prioridad}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* VISTA ADMINISTRADOR */}
                        {usuarioActivo.vista === 'vista-admin' && (
                            <div>
                                <h2 className="mb-4 text-danger">Panel de Administración</h2>
                                <div className="alert alert-warning shadow-sm">
                                    Control financiero y presupuestario de la agencia <strong>CreativaMente</strong>.
                                </div>
                                <div className="card p-4 shadow-sm bg-white border-0">
                                    <h5 className="text-secondary">Resumen de Operaciones</h5>
                                    <p className="mb-0">Total de proyectos activos en sistema: <strong>{proyectosData.length}</strong></p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}