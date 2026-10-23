// src/components/Navbar.jsx
import React from 'react';

export default function Navbar({ onLogout }) {
    return (
        <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom shadow-sm px-4 bg-white">
            <span className="fs-4 fw-bold text-primary">CreativaMente</span>
            <button className="btn btn-outline-danger btn-sm" onClick={onLogout}>
                Cerrar Sesión
            </button>
        </header>
    );
}