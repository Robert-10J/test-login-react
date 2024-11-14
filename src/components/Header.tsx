import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

export interface User {
  id: number
  name: string
  email: string
  email_verified_at: any
  created_at: string
  updated_at: string
}

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
  }, [])

  useEffect(() => {
    const dataUser = localStorage.getItem('user');
    const userParsed = JSON.parse(dataUser || '{}');
    setUser(userParsed);
  }, [])

  return (
    <header className='d-flex justify-content-end h-25 shadow p-2'>
      <div className='d-flex align-items-center justify-content-center gap-3'>
        <p className='m-0 fs-4'>
          Hola: <span className='fw-bolder p-1'>{user?.name}</span>
        </p>
        <Logout/>
      </div>
    </header>
  )
}

export default Header