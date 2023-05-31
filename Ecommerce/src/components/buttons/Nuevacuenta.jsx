import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Nuevacuenta = () => {

    const Usuarios = () => {
        let [CrearCuenta ] = useState([]);
        useEffect(() => {
            const enviar = () => {
                fetch('https://64769b539233e82dd53a2bb9.mockapi.io/registrer')
                .then((respuesta) => resepuesta.json())
                .then((data))
            };
        })
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
                        onSubmit={CrearCuenta}
                    >
                        <input 
                            type="text"
                            name='nombre'
                            placeholder='Tu Nombre'
                            id='email'
                            value={nombre}
                         />
                        <input 
                            type="email"
                            name='email'
                            placeholder='Tu Email'
                            id='email'
                            value={email}
                         />
                        
                        <input 
                            type="password"
                            name='password'
                            placeholder='Tu Contraseña'
                            id='password'
                            value={password}
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
            </>
     );
}
 
export default Nuevacuenta;