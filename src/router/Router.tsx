import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Homepage from '../pages/Homepage';

export const Router = () => {
  return (
    <Routes>
      <Route path='/iniciar-sesion' element={<Login />} />
      <Route path='/crear-cuenta' element={<CreateAccount />} />
      <Route path='/homepage' element={<Homepage />} />
      {/* Ruta por defecto */}
      <Route path='*' element={<Navigate to={'/iniciar-sesion'} replace />} />
    </Routes>
  );
}
