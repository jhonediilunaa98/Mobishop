import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";


const Login = () => {
    const { loginAsync, userError, user } = useContext(UserContext);
    const iniciar = (evento) => {
      evento.preventDefault();
      const { email, password } = evento.target.elements;
      console.log(email.value, password.value);
      loginAsync(email.value, password.value);
    };

    return ( <>
            <main className='main-form'>
                
                <section className='section-1'>
                </section>
                <section className='section-2'>
                    <h1 className='title-form'>Iniciar Sesión</h1>
                    <h2 className='subtitle-form'>Bienvenido/a </h2>
                    <p className='description-form'>Inicia Sesión para comprar</p>
                    <form 
                        id='form-login'
                        onSubmit={iniciar}
                    >
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
                            value='Ingresar'
                         />
                         {user 
                         ? <article className="alerta">
                         <span className='Msg'>Bienvenido/a</span>
                         <Link to={'/product'} className='Msg'>Ir a Productos </Link>
                         </article>
                         : <Link to={'/nuevacuenta'} className='new'>¿No tienes una cuenta?</Link>
                         }
                         {userError 
                         ? (<p className="Msg">{userError}</p>) 
                         : null }
                    </form>
                </section>
                
            </main>       
            </>
     );
}
 
export default Login;