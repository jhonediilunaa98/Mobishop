import React from 'react'

const Login = () => {

    const onChange = () => {

    }
    return ( 
            <main className='main-form'>
                <section className='section-form'>
                    <h1 className='title'>Inciar Sesión</h1>
                    <form>
                        <article className='contain-form'>
                        <input 
                            type="email"
                            name='email'
                            placeholder='Tu Email'
                            onChange={onChange}
                         />
                        </article>
                        <article className='contain-form'>
                        <input 
                            type="password"
                            name='password'
                            placeholder='Tu Contraseña'
                            onChange={onChange}
                         />
                        </article>
                        <article>
                        <input 
                            type="submit"
                            className='btn-submit'
                            value='Iniciar Sesión'
                         />
                        </article>
                    </form>
                </section>
            </main>
     );
}
 
export default Login;