import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { VALIDATION } from '../validations';
import Alert from '../components/Alert';
import axiosClient from '../config/axiosClient';
import useAuthRedirect from '../hooks/useAuthRedirect';

type DataForm = {
  email: string
  password: string
}

const Login = () => {
  useAuthRedirect('/homepage');
  const navigate = useNavigate();
  const { handleSubmit, register, setError, formState: { errors } } = useForm<DataForm>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/homepage');
      return;
    }
  }, [])

  const handleSubmitLogin = async (data: DataForm) => {
    try {
      const response = await axiosClient.post('/login', data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/homepage');
    } catch (error) {
      const err = error as AxiosError;
      const errors = Object.entries(err.response?.data);
      errors.forEach(([field, messages]) => {
        (messages as string[]).forEach((message) => {
          setError(field as keyof DataForm, {
            type: 'server',
            message: message
          });
        });
      });
    }
  };

  return (
    <div className='container-fluid mt-5 w-50 bg-white shadow p-5'>
      <h1 className='text-center m-3'>Iniciar Sesión</h1>

      <form onSubmit={handleSubmit(handleSubmitLogin)}>
        <div className='mb-3'>
          <label
            htmlFor='exampleInputEmail1'
            className='form-label'
          >Email</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            {...register('email', VALIDATION.email)}
          />
          {errors?.email && (<Alert typeAlert={'alert-danger'}>{errors?.email?.message}</Alert>)}
        </div>

        <div className='mb-3'>
          <label
            htmlFor='exampleInputPassword1'
            className='form-label'
          >Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            {...register('password', VALIDATION.password)}
          />
          {errors?.password && (<Alert typeAlert={'alert-danger'}>{errors?.password?.message}</Alert>)}
        </div>

        <div className='d-flex justify-content-between'>
          <button type='submit' className='btn btn-primary'>Iniciar Sesión</button>
          <p className='mt-3'>¿No tienes cuenta? <Link to='/crear-cuenta'>Regístrate</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login;