import React from 'react';
import { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {

 const {signInWithGoogle, createUser} = use(AuthContext);


 const handleRegister = (e) =>{
  e.preventDefault()

const form = e.target;
const name = form.name.value;
const email = form.email.value;
const password = form.password.value;
const photo = form.photoUrl.value;
console.log(name, photo)
createUser(email, password)
.then((userCredential) => {
    
    const user = userCredential.user;
  //  console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
 }

 const handleGoogleSignIn =()=>{

    signInWithGoogle()
    .then(result =>{

        console.log(result)

        const newUser = {
            name: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL

        }
        
        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res=>res.json()).then(data=>{
            // console.log('data after user save', data)
        })


    }).catch(error=>{
        // console.log(error)
    })

 }

    return (
        <div>

            <div className="hero  min-h-screen">
              <div className="hero-content flex-col ">
                 <div className="text-center lg:w-[500px]">
                  <h1 className="text-xl lg:text-3xl font-bold">Register now!</h1>
                 
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    
                  <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                      <input name='name' type="text" className="input" placeholder="Your Name" required />

                      <label className="label">Email</label>
                      <input name='email' type="email" className="input" placeholder="Email" required />

                      <label className="label">Password</label>
                      <input name='password' type="password" className="input" placeholder="Password" required />

                      <label className="label">Photo Url</label>
                      <input name='photoUrl' type="text" className="input" placeholder="Url" required />

                      <button type='submit' className="btn bg-[#388E3C] text-white mt-4">Register</button>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black mt-4 border-black"><FcGoogle></FcGoogle> Continue with google</button>
                    <p className='text-center font-semibold mt-2'>Didn't have an account?<Link to='/login'> <span className='text-[#388E3C]'>Log In</span></Link> </p>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            
            
        </div>
    );
};

export default Register;