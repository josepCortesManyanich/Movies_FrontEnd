import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';

export default function Signup() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    cumpleaños:'',
    imagen: '',
  })
  const [password, setPassword] = useState('');
  const [passwordControl, setPasswordControl] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  useEffect(() => {
    if (password !== passwordControl) {
      setErrorMessage("Las contraseñas no coinciden")
    } else {
      setErrorMessage(undefined)
    }
    // eslint-disable-next-line
  }, [passwordControl])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/api/user/signup', { username: user.username, email: user.email, password,
      cumpleaños: user.cumple, imagen: user.imageUrl });
      navigate('/');
    } catch (error) {
      setErrorMessage(error.response.data.error)
    }
  }

  return (
    <>
    <Navbar/>
    
    <div className='contenedor-signup'>
    <br/>
      
      <form onSubmit={handleSubmit} className='formulario-signup'>
        <br />
        <label>Username</label>
        <input required type="text" name="username" value={user.username} onChange={handleChange} />
        <br/>
        <label>Email</label>
        <input required type="email" name="email" value={user.email} onChange={handleChange} />
        <br/>
        <label>Cumpleaños</label>
        <input required type="text" name="cumpleaños" value={user.cumple} onChange={handleChange} />
        <br/>
        <label>Foto de perfil</label>
        <input required type="file" name="foto" value={user.image} onChange={handleChange} />
        <br/>
        <label>Password</label>
        <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value) } />
        <br/>
        <label>Repite la contraseña</label>
        <input required type="password" name="passwordControl" value={passwordControl} onChange={(e) => setPasswordControl(e.target.value)} />
        <br/>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
    </>
  )
}
