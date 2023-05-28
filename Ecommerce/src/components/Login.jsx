import React from 'react'

const Login = () => {

    return ( 
        <main>
            <section>
            <h1>Iniciar Sesión</h1>
            <form>
                <input 
                    type="email"
                    name='email' 
                    placeholder='Tu Email'
                    value={email}
                    onChange={onChange}
                />
                <input 
                    type="password"
                    name='password' 
                    placeholder='Tu Contraseña'
                    value={password}
                    onChange={onChange}
                />
            </form>
            </section>
        </main>
     );
}
 
export default Login;