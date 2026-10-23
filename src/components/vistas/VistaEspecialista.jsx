// src/components/vistas/VistaEspecialista.jsx
import React from 'react';

export default function VistaEspecialista({ tareas }) {
    return (
        <div>
            <h2 className="mb-3 text-warning">Área de Especialistas</h2>
            <h5 className="mb-3 text-secondary">Tareas Asignadas y Registro de Actividades</h5>
            <ul className="list-group shadow-sm">
                {tareas.map((t) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3" key={t.id}>
                        <div>
                            <strong>{t.tarea}</strong>
                            <div className="text-muted small">Proyecto asociado: {t.proyecto} | Horas estimadas: {t.horas}h</div>
                        </div>
                        <span className="badge bg-primary">{t.estado}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}