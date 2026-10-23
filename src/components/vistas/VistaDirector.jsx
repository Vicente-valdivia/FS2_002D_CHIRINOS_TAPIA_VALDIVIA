// src/components/vistas/VistaDirector.jsx
import React from 'react';

export default function VistaDirector({ proyectos, tareas }) {
    return (
        <div>
            <h2 className="mb-4 text-success">Tablero del Director</h2>
            
            <h4 className="mb-2">Listado General de Proyectos</h4>
            <div className="table-responsive bg-white shadow-sm p-3 rounded mb-4">
                <table className="table table-hover align-middle">
                    <thead className="table-success">
                        <tr>
                            <th>Código</th><th>Nombre</th><th>Cliente</th><th>Presupuesto</th><th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proyectos.map((p) => (
                            <tr key={p.codigo}>
                                <td><strong>{p.codigo}</strong></td>
                                <td>{p.nombre}</td>
                                <td>{p.cliente}</td>
                                <td>{p.presupuesto}</td>
                                <td><span className="badge bg-secondary">{p.estado}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h4 className="mb-2">Carga de Trabajo del Equipo</h4>
            <ul className="list-group shadow-sm">
                {tareas.map((t) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3" key={t.id}>
                        <span><strong>{t.especialista}</strong> — {t.tarea} ({t.proyecto})</span>
                        <span className="badge bg-info text-dark">Prioridad: {t.prioridad}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}