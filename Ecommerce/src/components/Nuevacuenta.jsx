import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import UserContext from "../context/UserContext";

const Nuevacuenta = () => {
        const { login, user } = useContext(UserContext);
        const enviar = (evento) => {
          evento.preventDefault();
          const { username, email, password } = evento.target.elements;
          console.log(username.value, email.value, password.value);
          login(username.value, email.value, password.value);
          if(user) {
            return console.log(username.value);
          }
        };

    return ( <>
            <main className='main-form'>
                
                <section className='section-1'>
                    <h2></h2>
                </section>
                <section className='section-2'>
                <h1 className='title-form'>Registrarse</h1>
                <p className="description-form">Crea tu cuenta para poder comprar</p>
                    <form 
                        id='form-login'
                        action="#"
                        onSubmit={enviar}
                    >
                        
                        <input 
                            type="text"
                            name='username'
                            placeholder='Tu Nombre'
                            id='username'
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
                         {user 
                         ? <article className="alerta">
                            <span className='Msg'>Registro exitoso {username.value}</span>
                            <Link to={'/'} className='Msg'>Ir a home </Link>
                         </article>
                         : <Link to={'/login'} className='new'>¿Ya tienes una cuenta?</Link>
                         }
                    </form>
                </section>
                
            </main>        
            </>
     );
}
 
export default Nuevacuenta;