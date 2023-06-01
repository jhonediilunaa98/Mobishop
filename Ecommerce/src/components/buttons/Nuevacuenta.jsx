import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import UserContext from "../context/UserContext";

const Nuevacuenta = () => {
  const { login, userError, user, userSuccess } = useContext(UserContext);
  const enviar = (evento) => {
    evento.preventDefault();
    const { username, email, password } = evento.target.elements;
    console.log(username.value, email.value, password.value);
    login(username.value, email.value, password.value);
    if (user) {
      // redireccion
    }
  };

    return ( <>
            <main className='main-form'>
                
                <section className='section-1'>
                    <h2></h2>
                </section>
                <section className='section-2'>
                    <h1 className='title'>Crear Cuenta</h1>
                    <form 
                        id='form-login'
                        action="#"
                        onSubmit={enviar}
                    >
                        <input 
                            type="text"
                            name='username'
                            placeholder='Tu Nombre'
                            id='email'
                         />
                        <input 
                            type="email"
                            name='email'
                            placeholder='Tu Email'
                            id='email'
                         />
                        
                        <input 
                            type="password"
                            name='password'
                            placeholder='Tu Contraseña'
                            id='password'
                         />

                        <input 
                            type="submit"
                            className='btn-submit'
                         />
                         <Link to={'/login'} className='new'>¿Ya tienes una cuenta?</Link>
                    </form>
                    {userError ? (
                    <p>{userError}</p>
                    ) : userSuccess ? (
                    <p>{userSuccess}</p>
                    ) : null}
                </section>
                
            </main>        
            </>
     );
}
 
export default Nuevacuenta;