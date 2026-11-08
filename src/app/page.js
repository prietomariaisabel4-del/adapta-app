'use client';
import React, { useState } from 'react';

export default function Home() {
  const [useUppercase, setUseUppercase] = useState(true);
  const [activeTab, setActiveTab] = useState('adapt');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#047857', color: 'white', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>ADAPTA — Módulo Psicopedagógico y Docente</h1>
        <p style={{ margin: '4px 0 0 0', fontSize: '14px', opacity: 0.9 }}>Adaptación DUA — Plan Raíz Santa Fe — Uso Individual Privado</p>
      </header>

      <div style={{ display: 'flex', gap: '20px' }}>
        <aside style={{ width: '220px', backgroundColor: 'white', padding: '12px', borderRadius: '12px', height: 'fit-content', border: '1px solid #e2e8f0' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button onClick={() => setActiveTab('adapt')} style={{ textAlign: 'left', padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: activeTab === 'adapt' ? '#ecfdf5' : 'transparent', color: activeTab === 'adapt' ? '#047857' : '#334155', fontWeight: 'bold', cursor: 'pointer' }}>4. Adaptar Actividades</button>
            <button onClick={() => setActiveTab('profiles')} style={{ textAlign: 'left', padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: activeTab === 'profiles' ? '#ecfdf5' : 'transparent', color: activeTab === 'profiles' ? '#047857' : '#334155', fontWeight: 'bold', cursor: 'pointer' }}>2. Perfiles de Aprendizaje</button>
            <button onClick={() => setActiveTab('materials')} style={{ textAlign: 'left', padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: activeTab === 'materials' ? '#ecfdf5' : 'transparent', color: activeTab === 'materials' ? '#047857' : '#334155', fontWeight: 'bold', cursor: 'pointer' }}>3. Mis Materiales (Plan Raíz)</button>
          </nav>
        </aside>

        <main style={{ flex: 1, backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
            <h2>Motor DUA — Plan Raíz 1° Grado (Capítulo 1)</h2>
            <button 
              onClick={() => setUseUppercase(!useUppercase)}
              style={{ backgroundColor: useUppercase ? '#047857' : '#e2e8f0', color: useUppercase ? 'white' : '#334155', padding: '8px 12px', borderRadius: '6px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {useUppercase ? 'IMPRENTA MAYÚSCULA' : 'minúscula'}
            </button>
          </div>

          <div style={{ border: '2px solid #047857', padding: '16px', borderRadius: '12px', backgroundColor: '#f0fdf4' }}>
            <h3 style={{ textTransform: useUppercase ? 'uppercase' : 'none', color: '#065f46' }}>
              {useUppercase ? '🟢 NIVEL 1: ALTO APOYO — EL YACARÉ VERDE' : '🟢 Nivel 1: Alto apoyo — El yacaré verde'}
            </h3>
            <p style={{ textTransform: useUppercase ? 'uppercase' : 'none', fontWeight: 'bold' }}>
              {useUppercase ? '👁️ MIRÁ LAS IMÁGENES Y UNÍ CON UNA FLECHA LAS QUE EMPIEZAN COMO YACARÉ:' : '👁️ Mirá las imágenes y uní con una flecha las que empiezan como yacaré:'}
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '8px', backgroundColor: 'white', marginBottom: '6px', borderRadius: '6px', textTransform: useUppercase ? 'uppercase' : 'none' }}>🐊 YACARÉ ⟶ EMPIEZA CON Y (EJEMPLO RESUELTO)</li>
              <li style={{ padding: '8px', backgroundColor: 'white', marginBottom: '6px', borderRadius: '6px', textTransform: useUppercase ? 'uppercase' : 'none' }}>🪀 YO-YO ⟶ (   ) EMPIEZA CON Y</li>
              <li style={{ padding: '8px', backgroundColor: 'white', borderRadius: '6px', textTransform: useUppercase ? 'uppercase' : 'none' }}>⛵ YATE ⟶ (   ) EMPIEZA CON Y</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
