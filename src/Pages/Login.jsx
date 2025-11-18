import { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';

const Login = () => {

  const {signInUser, signInWithGoogle} = use(AuthContext)

const location = useLocation();
const navigate = useNavigate()


const handleLogin = (e) =>{
  e.preventDefault()
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  // console.log(email,password)
  signInUser(email,password)
  .then((userCredential) => {
    
    const user = userCredential.user;
  //  console.log(user)
   navigate(`${location.state? location.state : "/"}`)
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
        
        fetch('https://deals-server-tenth.vercel.app/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res=>res.json()).then(data=>{
            // console.log('data after user save', data)
            navigate(`${location.state? location.state : "/"}`)
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
      <h1 className="text-xl lg:text-3xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">

          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-[#388E3C] text-white mt-4">Login</button>
        <button onClick={handleGoogleSignIn} className="btn bg-white text-black mt-4 border-black"><FcGoogle></FcGoogle> Continue with google</button>
        <p className='text-center font-semibold mt-2'>Already have an account?<Link to='/register'> <span className='text-[#388E3C]'>Register</span></Link> </p>
        </fieldset>
      </form>
    </div>
  </div>
</div>


        </div>
    );
};

export default Login;