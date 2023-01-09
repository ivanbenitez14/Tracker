import React, { Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Navbar } from '../components/Navbar'
import CompleteInformation from '../pages/CompleteInformation'
import { Contacts } from '../pages/contacts/Contacts'
import { Docs } from '../pages/docs/Docs'
import { PersonalData } from '../pages/personal/PersonalData'

export const FormsRoutes = () => {
  return (
   <div class="row">

   <div className="col">
     <Navbar />
   </div>

   <div class="col-9">
   <Routes>
      <Route path="/personal" element={ <PersonalData /> } />
      <Route path="/contacts" element={ <Contacts /> } />
      <Route path="/docs" element={ <Docs /> } />
      <Route path="/success" element={ <CompleteInformation /> } />

      <Route path="/*" element={ <Navigate to="/personal" /> } />

    </Routes>
   </div>

 </div>     
  )
}
