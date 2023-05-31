import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Nuevacuenta = () => {

    // State para iniciar sesion
    const [ usuario, guardarUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    //Estraer Usuario
    const { nombre, email, password } = usuario;

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

        // Password min 6 caracteres

        // Los 2 password components

        // Pasarlo al action
    }

    return ( <>
            <main className='main-form'>
                
                <section className='section-1'>
                    <h2></h2>
                </section>
                <section className='section-2'>
                    <h1 className='title'>Crear Cuenta</h1>
                    <form 
                        id='form-login'
                        onSubmit={onSubmit}
                    >
                        <input 
                            type="text"
                            name='nombre'
                            placeholder='Tu Nombre'
                            id='email'
                            value={nombre}
                            onChange={onChange}
                         />
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
                            value='Crear Cuenta'
                         />
                         <Link to={'/login'} className='new'>¿Ya tienes una cuenta?</Link>
                    </form>
                    
                </section>
                
            </main>  
            <Footer />         
            </>
     );
}
 
export default Nuevacuenta;