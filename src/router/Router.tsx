import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';

export const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      {/* Ruta por defecto */}
      <Route path='*' element={<Navigate to={'/login'} replace />} />
    </Routes>
  );
}
