import { useForm } from 'react-hook-form';
import axiosClient from '../config/axiosClient';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const handleSubmitLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axiosClient.post('/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitLogout)}>
      <input 
        type='submit' 
        value={'Cerrar Sesión'}
        className='btn btn-secondary'
      />
    </form>
  )
}

export default Logout