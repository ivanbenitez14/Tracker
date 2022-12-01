import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { FormPage } from '../pages/FormPage'

export const FormsRoutes = () => {
  return (
    <Routes>
        <Route path="form" element={ <FormPage /> } />

        <Route path="/*" element={ <Navigate to="/form" /> } />
    </Routes>
  )
}
