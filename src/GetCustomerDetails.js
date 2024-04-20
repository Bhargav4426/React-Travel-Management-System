import axios from 'axios';
import { useForm } from "react-hook-form";
import './GetCustomerDetails.css'
const GetCustomerDetails=()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.get('http://localhost:2000/details/getone/{id}')
      console.log(data);
  }
return(
    <>
    <div className="getdetailsbackground">
    <div class="row justify-content-center align-items-center h-100" id="divrow">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto" >
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-dark fs-5">Get Tour Details</h5>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="text" {...register("customerId",
                            {
                                required: true,
                                pattern: /^[0-9]{8,10}$/
                            })} />
                <label for="floatingInput">Tour Id</label>
                {errors.customerId && <p className="paragraphlogin">Please check the Tour Id</p>}
              </div>
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Get Details</button>
              </div>
              </form>
          </div>
        </div>
      </div>
    </div>
    </div>

    </>
)
}
export default GetCustomerDetails