import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const returnPath = location.state?.from || '/'

  const handleLogin = async (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    try {
      await signInUser(email, password)
      navigate(returnPath, { replace: true })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle()
      const newUser = {
        name: result.user.displayName,
        email: result.user.email,
        image: result.user.photoURL,
      }

      await fetch('https://deals-server-tenth.vercel.app/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })

      navigate(returnPath, { replace: true })
    } catch (error) {
      alert(error.message || 'Google sign-in failed.')
    }
  }

  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col'>
        <div className='text-center lg:w-[500px]'>
          <h1 className='text-xl lg:text-3xl font-bold'>Login now!</h1>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form onSubmit={handleLogin} className='card-body'>
            <fieldset className='fieldset'>
              <label className='label'>Email</label>
              <input name='email' type='email' className='input' placeholder='Email' required />

              <label className='label'>Password</label>
              <input name='password' type='password' className='input' placeholder='Password' required />

              <div>
                <a className='link link-hover' href='#'>Forgot password?</a>
              </div>

              <button className='btn bg-[#388E3C] text-white mt-4'>Login</button>
              <button
                type='button'
                onClick={handleGoogleSignIn}
                className='btn bg-white text-black mt-4 border-black'
              >
                <FcGoogle /> Continue with Google
              </button>

              <p className='text-center font-semibold mt-2'>
                Already have an account?
                <Link to='/register'>
                  <span className='text-[#388E3C]'> Register</span>
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
