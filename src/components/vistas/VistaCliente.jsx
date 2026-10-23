// src/components/vistas/VistaCliente.jsx
import React from 'react';

export default function VistaCliente({ proyectos }) {
    return (
        <div>
            <h2 className="mb-3 text-primary">Bienvenido Cliente</h2>
            <p className="text-muted">Estado actual de tus campañas contratadas en CreativaMente:</p>
            <div className="row">
                {proyectos.map((p) => (
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
    );
}