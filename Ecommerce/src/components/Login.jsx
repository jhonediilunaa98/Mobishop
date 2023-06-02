import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, redirect } from "react-router-dom";


const Login = () => {
    const { loginAsync, userError, user, userSuccess } = useContext(UserContext);
    const iniciar = (evento) => {
      evento.preventDefault();
      const { email, password } = evento.target.elements;
      console.log(email.value, password.value);
      loginAsync(email.value, password.value);
      if(user){
        return <redirect to='/contact'/>
      }
    };

    return ( <>
            <main className='main-form'>
                
                <section className='section-1'>
                    <h2></h2>
                </section>
                <section className='section-2'>
                    <h1 className='title'>Iniciar Sesión</h1>
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
                         />
                         {user 
                         ? <Link to={'/'} className='Msg'>Go to home</Link>
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