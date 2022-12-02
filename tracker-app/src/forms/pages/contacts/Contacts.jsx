import React from 'react';
import { Navbar } from '../../components/Navbar';
import '../contacts/styles.css'

export const Contacts = () => {
  return (
    <>
      <div class="container">

        <div class="row">

          <div className="col">
            <Navbar />
          </div>

          <div class="col-9">
            <h1>Contactos</h1>
          </div>

        </div>

      </div>

    </>
  )
}
