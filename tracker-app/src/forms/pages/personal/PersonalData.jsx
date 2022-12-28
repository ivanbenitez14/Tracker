import React from "react";
import { Navbar } from "../../components/Navbar";
import "../personal/styles.css";

export const PersonalData = () => {
  return (
    <>
      <div class="row">

        <div class="col-12">
          <h1>Datos personales</h1>

          <form action="" method="">
            <div class="nombrecompleto">
              <label class="nombre" for="nombre">
                <span>Nombre</span>
                <input id="nombre" name="nombre" placeholder="" />
              </label>

              <label class="apellido" for="apellido">
                <span>Apellido</span>
                <input id="apellido" name="apellido" placeholder="" />
              </label>
            </div>

            <h6 id="perfil">Foto de perfil</h6>

            <div class="foto-perfil">
              <picture>
                <img src="" alt="foto-perfil" />
              </picture>

              <div class="archivo">
                <span>Suelta tu archivo aquí o</span>
                <input type="file" id="file" href=""></input>
              </div>
            </div>

            <div class="section-inputs1">
              <label class="birthday" for="birthday">
                <span>Fecha de nacimiento</span>
                <input
                  id="birthday"
                  type="date"
                  name="birthday"
                  placeholder="Fecha de nacimiento"
                />
              </label>

              <select class="pais">
                <option value="value1" selected>
                  País
                </option>
                <option value="value2">Argentina</option>
                <option value="value3">Brasil</option>
              </select>
            </div>

            <label class="telefono" for="telefono">
              <span>Telefono</span>
              <input id="telefono" name="telefono" />
            </label>

            <label class="direccion" for="direccion">
              <span>Direccion</span>
              <input id="direccion" name="direccion" />
            </label>

            <div class="section-inputs2">
              <select class="provincia">
                <option value="value1" selected>
                  Provincia
                </option>
                <option value="value2">Buenos Aires</option>
                <option value="value3">Córdoba</option>
              </select>

              <select class="ciudad">
                <option value="value1" selected>
                  Ciudad
                </option>
                <option value="value2">C.A.B.A.</option>
                <option value="value3">Córdoba</option>
              </select>
            </div>

            <div class="botones">
              <button type="button" class="btn-atras">
                Atrás
              </button>

              <button type="button" class="btn-siguiente">
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
