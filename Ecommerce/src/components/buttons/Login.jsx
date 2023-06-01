import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import UserContext from "../context/UserContext";

const Login = () => {
    const { loginAsync, userError, user, userSuccess } = useContext(UserContext);
    const iniciar = (evento) => {
      evento.preventDefault();
      const { email, password } = evento.target.elements;
      console.log(email.value, password.value);
      loginAsync(email.value, password.value);
      if (user) {
        
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
                         <Link to={'/nuevacuenta'} className='new'>Crear Cuenta</Link>
                         {userError 
                    ? (<p className="Msg">{userError}</p>) 
                    : userSuccess 
                    ? (<p className="Msg">{userSuccess}</p>)
                    : null}
                    </form>
                </section>
                
            </main>       
            </>
     );
}
 
export default Login;