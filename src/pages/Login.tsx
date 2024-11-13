import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { VALIDATION } from '../validations';
import Alert from '../components/Alert';

type DataForm = {
  email: string
  password: string
}

const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<DataForm>();

  const handleSubmitLogin = async(data: DataForm) => {
    // Handle form submission
    console.log(data);
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
            { ...register('email', VALIDATION.email) }
          />
          { errors?.email && (<Alert typeAlert={'alert-danger'}>{errors?.email?.message}</Alert>) }
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
            { ...register('password', VALIDATION.password) }
          />
          { errors?.password && (<Alert typeAlert={'alert-danger'}>{errors?.password?.message}</Alert>) }
        </div>

        <div className='d-flex justify-content-between'>
          <button type='submit' className='btn btn-primary'>Iniciar Sesión</button>
          <p className='mt-3'>¿No tienes cuenta? <Link to='/crear-cuenta'>Regístrate</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login