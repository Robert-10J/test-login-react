import { useForm } from 'react-hook-form'

type DataForm = {
  email: string
  password: string
}

const Login = () => {
  const { handleSubmit, register, formState: { errors} } = useForm<DataForm>();

  const handleSubmitLogin = async(data: DataForm) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className='container-fluid mt-5'>
      <form onSubmit={handleSubmit(handleSubmitLogin)}>
        <div className='mb-3'>
          <label 
            htmlFor='exampleInputEmail1' 
            className='form-label'
          >Email address</label>
          <input 
            type='email' 
            className='form-control' 
            id='exampleInputEmail1' 
            aria-describedby='emailHelp'
          />
          <div id='emailHelp' className='form-text'>We'll never share your email with anyone else.</div>
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
          />
        </div>

        <button type='submit' className='btn btn-primary'>Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default Login