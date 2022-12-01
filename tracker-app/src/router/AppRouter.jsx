import React from 'react'
import { Route, Routes } from 'react-router'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { FormsRoutes } from '../forms/routes/FormsRoutes'

export const AppRouter = () => {
  return (
    <Routes>

      {/* Login y Registro */} 
      <Route path="/auth/*" element={ <AuthRoutes /> } />
      
      {/* Formulario */}
      <Route path="/*" element={ <FormsRoutes /> } />

    </Routes>
  )
}
