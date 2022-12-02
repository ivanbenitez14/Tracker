import React from "react";
import '../components/styles.css';
import { useNavigate } from "react-router";

export const Navbar = () => {

  const navigate = useNavigate();

  const onPersonalDataClick = () => {
    return navigate('/personal');
  }

  const onContactsClick = () => {
    return navigate('/contacts');
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col navbar">

            <div>
              <button id="personal" onClick={onPersonalDataClick}>
                Datos Personales
              </button>
            </div>

            <div>
                <button id="contacts" onClick={onContactsClick}>
                    Contactos
                </button>
            </div>

            <div>
                Documentos
            </div>

            <div>
                Datos laborales
            </div>

            <div>
                Datos adicionales
            </div>

          </div>


        </div>
      </div>
    </>
  );
};