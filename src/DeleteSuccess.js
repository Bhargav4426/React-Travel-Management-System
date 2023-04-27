import { useLocation,useNavigate} from "react-router-dom"
import React from 'react';
import './DeleteSuccess.css'
import greentick from './images/greentick.png'
const DeleteSuccess=()=>{
    const navigate=useNavigate();
    const location=useLocation();
    const customerId = location.state?.getId;
    console.log(customerId)
    return(
        <>
        <div class="registersuccessdiv">
          <div class="deletesuccess">
          <img src={greentick} alt=""/>
		  <h1 style={{color:"white"}}>Thank You!</h1>
          <h3>
          <div className="cupon-pop">
          Your Travel Id <span>{customerId}</span>  is Deleted Successfull
          </div>  
          </h3>        
          </div>
          <div className="text-center">
          <button type="button" class="btn btn-primary btn-sm" id="backbutton" onClick={()=>navigate('/',{ replace: true })}>&lt;Back To Home</button>
          </div>
        </div>
        </>
    )
}
export default DeleteSuccess