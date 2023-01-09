import React from 'react'
import { useNavigate } from 'react-router';
import useForm from '../../../hooks/useForm';

export const Docs = () => {
  const [values, handleChange] = useForm();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if(values){
      navigate('/success')
    }
  }
  return (
    <>
    <div className="row">

      <div className="col-12">
        <h1>Documentos</h1>
        <h6>Cargue documentos que crea relevantes como ser Carnet de discapacidad, Alergias etc</h6>
        <form onSubmit={onSubmit}>
            <div className="nombrecompleto">
              <label className="nombre" for="nombre">
                <span>Documento</span>
                <input id="nombre" type="file" name="document" placeholder=""  onChange={handleChange}/>
              </label>
            </div>
            <div className="botonesContact">
            <button type="button" class="btn-atras" onClick={() => navigate('/contacts')}>
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
