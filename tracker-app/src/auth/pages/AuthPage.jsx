import React from "react";
import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import './AuthStyles.css'
export const AuthPage = () => {
  const navigate = useNavigate();
  const[ values, handleChange] = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    if(values.email && values.password){
      navigate('/personal', values)
    }
  }

  return (
    <>
      <div className="row">
        <div className="col login">
          {/* <img className="empresa" src="" alt="logo-empresa" /> */}

          <div className="header">
            <h1>Bienvenidos a Tracker!</h1>
            <p>Ingresa para acceder a tus configuraciones</p>
          </div>

          <form onSubmit={onSubmit} className="form-class">
             <label for="email">
                <span>Email</span>
              </label>
            
              <input className="input-class" id="email" name="email" placeholder="" type="email" onChange={handleChange} />

            <label for="password">
              <span>Password</span>
            </label>
            <input
              className="input-class"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder=""
            />

            {/* <div className="atajos">
              <label for="checkbox" className="checkbox-label">
                <input type="checkbox" id="checkbox" />
                Recordarme
              </label>

              <a id="links" href="">
                Olvide mi contraseña
              </a>
            </div> */}

            <button id="register-btn" type="submit" className="submit-btn">
              Ingresar
            </button>
          </form>

          <button className="google-btn">
            <picture>
              <img
                src="https://freesvg.org/img/1534129544.png"
                alt="logo-google"
              />
            </picture>
            <span>Ingresar con Google</span>
          </button>

          <div className="footer">
            <span>No tienes una cuenta?</span>
            <a id="links" href="">
              Registrarme
            </a>
          </div>
        </div>

        <div className="col-6 imagen">
          <img
            id="right-img"
            src="https://media.istockphoto.com/id/1257374139/vector/city-map.jpg?s=612x612&w=0&k=20&c=4ornn3uaf7P956FVKOOJ9LuRTwJMS72w2bUjPAFLtQQ="
            alt="mapa"
          />
        </div>
      </div>
    </>
  );
};
