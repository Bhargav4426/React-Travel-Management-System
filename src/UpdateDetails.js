/* eslint-disable */
import { useForm } from "react-hook-form";
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios'
import './UpdateDetails.css'
const UpdateDetails=()=>{
  const location=useLocation();
  const getData = location.state?.getData || {};
  const navigate=useNavigate();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      packagename: getData.packagename,
      price: getData.price,
    },
  });
  const { errors } = formState;
  
  const onSubmit = (data) => {
    axios.put(`http://localhost:2000/details/update/${getData.customerId}`,data).then((posRes)=>{
      const {data}=posRes;
      console.log(data)
      navigate('/updatesuccess', { state: { updateData: data } })
    },(errRes)=>{
      navigate('/fail');
    })
  }
    return(
        <>
        <div className="tourregisterbackground">
        <div class="row mt-0 mx-0">
  <div class="col-md-3">
    <div  id="tourregisterlogo" class="text-center">
      <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
        data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
        data-mdb-animation-on-scroll="repeat" class="fas fa-3x fa-shipping-fast text-white"></i>
      <h3 class="mt-4 text-white">Welcome</h3>
      <p class="white-text">You are 30 seconds away from Updating your Registration Details!</p>
    </div><br/><br/>
    <div class="text-center" >
      <button type="submit" class="btn btn-primary back-button" onClick={()=>navigate(-1)}>Go back</button>
    </div>
  </div> 
  <div class="col-md-9 justify-content-center">
    <div class="card card-custom pb-4">
      <div class="card-body mt-0 mx-5">
        <div class="text-center mb-3 pb-2 mt-3">
          <h4 style={{color:"#495057"}}>Please Update Details</h4>
        </div>

        <form class="mb-0" method="post" onSubmit={handleSubmit(onSubmit)}>

          <div class="row mb-4">
            <div class="col">
              <div class="form-floating mb-3">
                <input type="text" id="floatingInput" class="form-control"  placeholder='guestOne' defaultValue={getData.guestOneName} {...register("guestOneName", { required: true, pattern:/^[a-zA-Z ]{2,40}$/ })} />
                <label for="floatingInput">Guest #1 Full Name<span>*</span></label>
                {errors.guestOneName && <p className="paragraphregister">Please Check Guest Name</p>}
              </div>
            </div>
            <div class="col">
            <div class="form-floating mb-3">
            
                <input type="date" class="form-control" id="date" placeholder='DD-MM-YYYY' defaultValue={getData.guestOneDob} {...register("guestOneDob", { required: true})} />
                <label for="floatingInput">Select DOB<span>*</span></label>
                {errors.guestOneDob && <p className="paragraphregister">Please Check Guest #1 Date Of Birth</p>}
              </div>
            </div>
          </div>
          <div class="row mb-4">
          <div class="col">
              <div class="form-floating mb-3">
                <input type="text" id="floatingInput" class="form-control" placeholder='guestTwo' defaultValue={getData.guestTwoName} {...register("guestTwoName", { required: false,pattern:/^[a-zA-Z ]{2,40}$/ })} />
                <label for="floatingInput">Guest #2 Full Name(Optional)</label>
                {errors.guestTwoName && <p className="paragraphregister">Please Check Guest Name</p>}
              </div>
            </div>
            <div class="col">
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingInput" placeholder='date' defaultValue={getData.guestTwoDob} {...register("guestTwoDob", { required: false})}/>
                <label for="floatingInput">Select DOB</label>
                {errors.guestTwoDob && <p className="paragraphregister">Please Check Guest #2 Date Of Birth</p>}
              </div>
            </div>
          </div>
          <div class="row mb-4">
          <div class="col">
              <div class="form-floating mb-3">
                <input type="text" id="floatingInput" class="form-control"  placeholder='guestThree' defaultValue={getData.guestThreeName} {...register("guestThreeName", { required: false, pattern:/^[a-zA-Z ]{2,40}$/ })} />
                <label for="floatingInput">Guest #3 Full Name(Optional)</label>
                {errors.guestThreeName && <p className="paragraphregister">Please Check Guest Name</p>}
              </div>
            </div>
            <div class="col">
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingInput" placeholder='date' defaultValue={getData.guestThreeDob}{...register("guestThreeDob", { required: false})} />
                <label for="floatingInput">Select DOB</label>
                {errors.guestThreeDob && <p className="paragraphregister">Please Check Guest #3 Date Of Birth</p>}
              </div>
            </div>
          </div>
          
          <div class="row mb-4">
            <div class="col">
            <div class="form-floating mb-3">
                <input type="text" id="floatingInput" class="form-control" placeholder='city' defaultValue={getData.city} {...register("city", { required: true, pattern:/^[a-zA-Z ]{2,40}$/ })} />
                <label for="floatingInput">City<span>*</span></label>
                {errors.city && <p className="paragraphregister">Please Check City</p>}
              </div>
            </div>
            <div class="col">
            <div class="form-floating mb-3">
                <input type="text" id="floatingInput" class="form-control" placeholder='address' defaultValue={getData.address}{...register("address", { required: true, pattern:/[a-z A-Z 0-9\s,'-]*$/ })} />
                <label for="floatingInput">Address<span>*</span></label>
                {errors.address && <p className="paragraphregister">Please Check Address</p>}
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col">
            <div class="form-floating mb-3">
                <input type="tel" class="form-control" id="floatingMobile"  placeholder='mobile' defaultValue={getData.mobile}{...register("mobile", {
                            required: true,
                            pattern: /^(0|91)?[6-9][0-9]{9}$/
                        })} />
                <label for="floatingMobile">Mobile Number<span>*</span></label>
                {errors.mobile && <p className="paragraphregister">Please Check Mobile Number</p>}
              </div>
            </div>
            <div class="col">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingemail" placeholder='email' defaultValue={getData.email}{...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} />
                <label for="floatingInput">Email<span>*</span></label>
                {errors.email && <p className="paragraphregister">Please Check the Email</p>}
              </div>
            </div>
          </div>
          <div class="row mb-4">
          <div class="col">
              <div class="form-floating mb-3">
                <input type="text" id="packageName" class="form-control" defaultValue={getData.packagename} placeholder='packagename' {...register("packagename")} disabled />
                <label for="floatingInput">Package Name<span>*</span></label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating mb-3">
                <input type="text" id="price" class="form-control" defaultValue={getData.price} placeholder='price' {...register("price")} disabled/>
                <label for="floatingInput">Price<span>*</span></label>
              </div>
            </div>
          </div>
          <div className="float-end">
          <button type="reset" class="btn btn-primary btn-rounded" id="resetbutton"
              style={{backgroundColor: "#0062CC"}}>Reset</button>
            <button type="submit" class="btn btn-primary btn-rounded" id="submittbutton"
              style={{backgroundColor: "#0062CC"}}>Update</button>
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
export default UpdateDetails
