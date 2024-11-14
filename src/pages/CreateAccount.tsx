import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import Alert from '../components/Alert';
import axiosClient from '../config/axiosClient';
import { VALIDATION_REGISTER } from '../validations';

type DataForm = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const CreateAccount = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, setError, formState: { errors} } = useForm<DataForm>();

  const handleSubmitCreateAccount = async (data: DataForm) => {
    try {
      console.log(data);
      const response = await axiosClient.post('/register', data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/homepage')
    } catch (error) {
      const err = error as AxiosError;
      const errors = Object.entries(err.response?.data?.errors);
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
      <h1 className='text-center m-3'>Crear Cuenta</h1>

      <form onSubmit={handleSubmit(handleSubmitCreateAccount)}>
        <div className='mb-3'>
          <label 
            htmlFor='name' 
            className='form-label'
          >Name</label>
          <input 
            type='text' 
            className='form-control' 
            id='name' 
            { ...register('name', VALIDATION_REGISTER.name) }
          />
          { errors?.name && (<Alert typeAlert={'alert-danger'}>{errors?.name?.message}</Alert>) }
        </div>
        <div className='mb-3'>
          <label 
            htmlFor='email' 
            className='form-label'
          >Email</label>
          <input 
            type='email' 
            className='form-control' 
            id='email'
            { ...register('email', VALIDATION_REGISTER.email) }
          />
          { errors?.email && (<Alert typeAlert={'alert-danger'}>{errors?.email?.message}</Alert>) }
        </div>

        <div className='mb-3'>
          <label 
            htmlFor='password' 
            className='form-label'
          >Password</label>
          <input 
            type='password'
            className='form-control'
            id='password'
            { ...register('password', VALIDATION_REGISTER.password) }
          />
          { errors?.password && (<Alert typeAlert={'alert-danger'}>{errors?.password?.message}</Alert>) }
        </div>
        
        <div className='mb-3'>
          <label 
            htmlFor='passwordRepeat' 
            className='form-label'
          >Repetir Password</label>
          <input 
            type='password'
            className='form-control'
            id='passwordRepeat'
            { ...register('password_confirmation')}
          />
          { errors?.password_confirmation && (<Alert typeAlert={'alert-danger'}>{errors?.password_confirmation?.message}</Alert>) }
        </div>

        <div className='d-flex justify-content-between'>
          <button type='submit' className='btn btn-primary'>Crear Cuenta</button>
          <p className='mt-3'>Ya tienes cuenta? <Link to='/iniciar-sesion'>Inicia Sesión</Link></p>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount