import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Login = () => {

    // State para iniciar sesion
    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: ''
    })

    //Estraer Usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando quiera iniciar sesion
    const onSubmit = e => {
        e.preventDefault();
        // Validar Campos vacios
        // Pasarlo al action
    }

    return ( <>
            <main className='main-form'>
                
                <section className='section-1'>
                    <h2></h2>
                </section>
                <section className='section-2'>
                    <h1 className='title'>Iniciar Sesión</h1>
                    <form 
                        id='form-login'
                        onSubmit={onSubmit}
                    >
                        <input 
                            type="email"
                            name='email'
                            placeholder='Tu Email'
                            id='email'
                            value={email}
                            onChange={onChange}
                         />
                        
                        <input 
                            type="password"
                            name='password'
                            placeholder='Tu Contraseña'
                            id='password'
                            value={password}
                            onChange={onChange}
                         />
                        
                        <input 
                            type="submit"
                            className='btn-submit'
                            value='Iniciar Sesión'
                         />
                         <Link to={'/nuevacuenta'} className='new'>Crear Cuenta</Link>
                    </form>
                    
                </section>
                
            </main>  
            <Footer />         
            </>
     );
}
 
export default Login;