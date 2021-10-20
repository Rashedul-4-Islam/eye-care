import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {handleEmailChange,handlePasswordChange, signInWithGoogle,handleLogin,error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.form || '/homes'

    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_uri)
      })
    }

  
    return (
        <div>
            <div className="login pt-5">
                <h3 className="fw-bold">Log In</h3>
                <div className=" mb-5 p-3 py-5  bg-dark m-auto rounded form-size">
                    <form action="" className="text-start text-light input-size">
                        <label className="fw-bold" htmlFor="inputemail">Email</label>
                        <br />
                        <input onBlur={handleEmailChange} className="form-control" type="email" placeholder="Enter your email" required />
                        <br />
                        <label className="fw-bold" htmlFor="passwordfs12">Password</label>
                        <br />
                        
                        <input onBlur={handlePasswordChange} className="form-control" type="password" placeholder="Enter your password" required />
                        <div className="text-danger mt-3">{error}</div>
                        <br />
                        <input  onClick={handleLogin} className="btn btn-danger log-button px-4 fw-bold" type="submit" value="Login" />
                        <p className="text-center">
                        Have you an Account?
                        <Link to="/register" className="text-decoration-none">Register Now</Link>
                        </p>
                    </form>
                    <div className="text-light mt-2">------------------OR-------------------</div>
                    <button onClick={handleGoogleLogin} className="btn btn-warning mt-2 fw-bold"><span><i className="fab fa-google"></i></span> Sign In With Google</button>
                </div>
               
            </div>
            
        </div>
    );
};

export default Login;