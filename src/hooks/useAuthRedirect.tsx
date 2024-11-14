import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Routes = '/iniciar-sesion' | '/crear-cuenta' | '/homepage'
const useAuthRedirect = (authenticatedUrl: Routes ) => {
  const navigate = useNavigate();
  const unauthenticatedUrl: Routes = '/iniciar-sesion';

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(authenticatedUrl);
    } else {
      navigate(unauthenticatedUrl);
    }
  }, [navigate, authenticatedUrl, unauthenticatedUrl]);
}

export default useAuthRedirect;