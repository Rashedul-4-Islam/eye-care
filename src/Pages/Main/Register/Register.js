import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const {handleEmailChange,handlePasswordChange, signInWithGoogle,handleRegistration,error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.form || '/homes'

    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then(() =>{
            history.push(redirect_uri)
      }).catch((error) => {
          console.log(error.message);
      })
    }

    return (
        <div>
           
            <div className="login pt-5">
            <h3 className="fw-bold ">Register</h3>
                <div className=" mb-5 p-3 py-5  bg-dark m-auto rounded form-size">
                    <form onSubmit={handleRegistration} action="" className="text-start text-light mb-6 ms-5 input-size">
                        <label className="fw-bold" htmlFor="">Email</label>
                        <br />
                        <input onBlur={handleEmailChange} className="form-control" type="email" placeholder="Enter your email" />
                        <br />
                        <label className="fw-bold" htmlFor="">Password</label>
                        <br />
                        <input onBlur={handlePasswordChange} className="form-control" type="password" placeholder="Enter your password" />
                        <div className="text-danger mt-3">{error}</div>
                        <br />
                        <input  className="btn btn-danger ms-4 px-5 fw-bold" type="submit" value="Submit" />
                        <p>
                        Already Have an Account?
                        <Link to="/login" className="text-decoration-none">Log In</Link>
                        </p>
                    </form>
                    <div className="text-light mt-2">------------------OR-------------------</div>
                    <button onClick={handleGoogleLogin} className="btn btn-warning mt-2 fw-bold">Sign In With Google</button>
                </div>
               
            </div>
            
        </div>
    );
};

export default Register;
