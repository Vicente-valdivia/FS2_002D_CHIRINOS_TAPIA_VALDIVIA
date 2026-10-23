// src/components/vistas/VistaAdmin.jsx
import React from 'react';

export default function VistaAdmin({ proyectos }) {
    return (
        <div>
            <h2 className="mb-4 text-danger">Panel de Administración</h2>
            <div className="alert alert-warning shadow-sm border-0">
                Control financiero, presupuestario y métricas de rentabilidad de la agencia <strong>CreativaMente</strong>.
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card p-4 shadow-sm bg-white border-0">
                        <h5 className="text-secondary">Proyectos Totales Registrados</h5>
                        <h3 className="fw-bold text-dark mb-0">{proyectos.length} campañas</h3>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card p-4 shadow-sm bg-white border-0">
                        <h5 className="text-secondary">Estado Financiero Global</h5>
                        <p className="text-success fw-bold mb-0">Sin desviaciones críticas de presupuesto reportadas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}