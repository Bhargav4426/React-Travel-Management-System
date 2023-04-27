import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import './Login.css'
const Login=()=>{
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
}
    return(
        <>
            <div className="loginbackground">
    <div class="row justify-content-center align-items-center h-100" id="divrow">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto" >
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-dark fs-5">Login</h5>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="email" {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}/>
                <label for="floatingInput">Email address</label>
                {errors.email && <p className="paragraphlogin">Please check the Email</p>}
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}/>
                <label for="floatingPassword">Password</label>
                {errors.password && <p className="paragraphlogin">Please check the Password</p>}
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
              <hr class="my-4"/>
              Don't have an account?<Link to="/register" style={{textDecoration: 'none'}}> Register</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
            </div>
        </>
    )

}
export default Login;