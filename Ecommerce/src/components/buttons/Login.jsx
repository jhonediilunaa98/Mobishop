import React from 'react'

const Login = () => {

    const onChange = () => {

    }
    return ( 
            <main className='main-form'>
                
                <section className='section-1'>
                    <h2></h2>
                </section>
                <section className='section-2'>
                    <h1 className='title'>Inciar Sesión</h1>
                    <form>
                        <input 
                            type="email"
                            name='email'
                            placeholder='Tu Email'
                            id='email'
                            onChange={onChange}
                         />
                        
                        <input 
                            type="password"
                            name='password'
                            placeholder='Tu Contraseña'
                            id='password'
                            onChange={onChange}
                         />
                        
                        <input 
                            type="submit"
                            className='btn-submit'
                            value='Iniciar Sesión'
                         />
                    </form>
                </section>
            </main>
     );
}
 
export default Login;