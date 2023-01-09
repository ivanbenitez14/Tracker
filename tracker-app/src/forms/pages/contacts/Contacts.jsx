import React from 'react';
import { useNavigate } from 'react-router';
import useForm from '../../../hooks/useForm';
import './styles.css'

export const Contacts = () => {
  const [values, handleChange] = useForm();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if(values){
      navigate('/docs')
    }
  }
  return (
    <>
      <div class="row">

        <div class="col-12">
          <h1>Contacto</h1>
          <form onSubmit={onSubmit}>
            <div className="nombrecompleto">
              <label className="nombre" for="nombre">
                <span>Nombre</span>
                <input id="nombre" name="nombre" placeholder=""  onChange={handleChange}/>
              </label>

              <label className="apellido" for="apellido">
                <span>Apellido</span>
                <input id="apellido" name="apellido" placeholder=""   onChange={handleChange}/>
              </label>
            </div>

            <label className="telefono" for="telefono">
              <span>Telefono</span>
              <input id="telefono" name="telefono"  onChange={handleChange} />
            </label>

            <label className="direccion" for="direccion">
              <span>Direccion</span>
              <input id="direccion" name="direccion"  onChange={handleChange}/>
            </label>

            <div className="section-inputs2">
            <select className="pais" name="pais" onChange={handleChange}>
                <option value="value1" selected>
                  País
                </option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
              </select>

              <select className="provincia" name="provincia" onChange={handleChange}>
                <option value="value1" selected>
                  Provincia
                </option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Córdoba">Córdoba</option>
              </select>

              <select className="ciudad" name="ciudad" onChange={handleChange}>
                <option value="value1" selected>
                  Ciudad
                </option>
                <option value="C.A.B.A.">C.A.B.A.</option>
                <option value="Córdoba">Córdoba</option>
              </select>
            </div>

            <div className="botonesContact">
            <button type="button" class="btn-atras" onClick={() => navigate('/personal')}>
                Atrás
              </button>
              <button type="submit" className="btn-siguiente">
                Siguiente
              </button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}
