import React, { useState } from "react";
import '../components/styles.css';
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [path, setPath] = useState('');
  const pathname= window.location.pathname;

  const onPersonalDataClick = () => {
    return navigate('/personal');
  }

  const onContactsClick = () => {
    return navigate('/contacts');
  }

  const onDocsClick = () => {
    return navigate('/docs');
  }

  const onLaboralClick = () => {
    return navigate('/laboral');
  }

  const onAditionalClick = () => {
    return navigate('/aditional');
  }

  useEffect(() => {
    setPath(pathname)
  }, [pathname])

  return (
    <>
      <div class="row">
        
        <div class="col navbar">

          <div>
            <button className={path === '/personal' ? 'personal-active' : 'personal' } onClick={onPersonalDataClick}>
              <i class="bi bi-person-lines-fill"></i>
              <span>Datos Personales</span>
            </button>
          </div>

          <div>
            <button className={pathname === '/contacts' ? 'personal-active' : 'personal' } onClick={onContactsClick}>
              <i class="bi bi-people-fill"></i>
              <span>Contactos</span>
            </button>
          </div>

          <div>
            <button className={pathname === '/docs' ? 'personal-active' : 'personal' } onClick={onDocsClick}>
              <i class="bi bi-archive-fill"></i>
              <span>Documentos</span>
            </button>
          </div>

          <div>
            <button className={pathname === '/laboral' ? 'personal-active' : 'personal' } onClick={onLaboralClick}>
              <i class="bi bi-card-checklist"></i>  
              <span>Documentos laborales</span>
            </button>
          </div>

          <div>
            <button className={pathname === '/aditional' ? 'personal-active' : 'personal' } onClick={onAditionalClick}>
              <i class="bi bi-file-earmark-diff-fill"></i>
              <span>Documentos adicionales</span>
            </button>
          </div>

        </div>

      </div>
    </>
  );
};