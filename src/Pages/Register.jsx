import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Register = () => {
  const { signInWithGoogle, createUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = async (event) => {
    event.preventDefault()

    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photo = form.photoUrl.value

    try {
      await createUser(email, password)
      navigate('/', { replace: true })
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

      navigate('/', { replace: true })
    } catch (error) {
      alert(error.message || 'Google sign-in failed.')
    }
  }

  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col'>
        <div className='text-center lg:w-[500px]'>
          <h1 className='text-xl lg:text-3xl font-bold'>Register now!</h1>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form onSubmit={handleRegister} className='card-body'>
            <fieldset className='fieldset'>
              <label className='label'>Name</label>
              <input name='name' type='text' className='input' placeholder='Your Name' required />

              <label className='label'>Email</label>
              <input name='email' type='email' className='input' placeholder='Email' required />

              <label className='label'>Password</label>
              <input name='password' type='password' className='input' placeholder='Password' required />

              <label className='label'>Photo URL</label>
              <input name='photoUrl' type='text' className='input' placeholder='Photo URL' required />

              <button type='submit' className='btn bg-[#388E3C] text-white mt-4'>Register</button>
              <button type='button' onClick={handleGoogleSignIn} className='btn bg-white text-black mt-4 border-black'>
                <FcGoogle /> Continue with Google
              </button>

              <p className='text-center font-semibold mt-2'>
                Already have an account?
                <Link to='/login'>
                  <span className='text-[#388E3C]'> Log In</span>
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
