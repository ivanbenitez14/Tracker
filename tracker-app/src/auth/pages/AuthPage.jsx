import React from "react";

export const AuthPage = () => {



  return (
    <>
      <div class="row">
        <div class="col login">
          <img class="empresa" src="" alt="logo-empresa" />

          <div class="header">
            <h1>Bienvenidos a Tracker!</h1>
            <p>Ingresa para acceder a tus configuraciones</p>
          </div>

          <form action="" method="">
            <label for="email">
              <span>Email</span>
              <input id="email" name="email" placeholder="" />
            </label>

            <label for="password">
              <span>Password</span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder=""
              />
            </label>

            <div class="atajos">
              <label for="checkbox" class="checkbox-label">
                <input type="checkbox" id="checkbox" />
                Recordarme
              </label>

              <a id="links" href="">
                Olvide mi contraseña
              </a>
            </div>

            <button id="register-btn" type="submit" class="submit-btn">
              Ingresar
            </button>
          </form>

          <button class="google-btn">
            <picture>
              <img
                src="https://freesvg.org/img/1534129544.png"
                alt="logo-google"
              />
            </picture>
            <span>Ingresar con Google</span>
          </button>

          <div class="footer">
            <span>No tienes una cuenta?</span>
            <a id="links" href="">
              Registrarme
            </a>
          </div>
        </div>

        <div class="col-6 imagen">
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
