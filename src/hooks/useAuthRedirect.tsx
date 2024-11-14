import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthenticatedUrl = '/homepage';
type UnauthenticatedUrl = '/iniciar-sesion' | '/crear-cuenta';

const UseAuthRedirect = (
  { 
    authenticatedUrl, 
    unauthenticatedUrl 
  }: { 
    authenticatedUrl: AuthenticatedUrl, 
    unauthenticatedUrl: UnauthenticatedUrl 
  }
) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(authenticatedUrl);
    } else {
      navigate(unauthenticatedUrl);
    }
  }, [navigate, authenticatedUrl, unauthenticatedUrl]);
}

export default UseAuthRedirect;