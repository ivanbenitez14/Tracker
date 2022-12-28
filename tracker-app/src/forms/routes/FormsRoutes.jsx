import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { AditionalData } from '../pages/aditional/AditionalData'
import { Contacts } from '../pages/contacts/Contacts'
import { Docs } from '../pages/docs/Docs'
import { LaboralData } from '../pages/laboral/LaboralData'
import { PersonalData } from '../pages/personal/PersonalData'

export const FormsRoutes = () => {
  return (
    <Routes>

      <Route path="/personal" element={ <PersonalData /> } />
      <Route path="/contacts" element={ <Contacts /> } />
      <Route path="/docs" element={ <Docs /> } />
      <Route path="/laboral" element={ <LaboralData /> } />
      <Route path="/aditional" element={ <AditionalData /> } />

      <Route path="/*" element={ <Navigate to="/personal" /> } />

    </Routes>
  )
}
