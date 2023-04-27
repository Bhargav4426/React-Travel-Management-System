import { useNavigate } from "react-router-dom"
import './FailMessage.css';
import redtick from './images/redtick.png'
const FailMessage=()=>{
const navigate=useNavigate();
return(
    <>
      <div class="faildiv">
      <div class="thank-you-pop">
          <img src={redtick} alt=""/>
		  <h1>Oops!</h1>
		  <p>Something went wrong</p>
          <p>Please refresh your browser and submit again</p>
	  </div>
      <div className="text-center">
      <button type="submit" class="btn btn-primary btn-fail" onClick={()=>navigate(-1)} style={{margin:"30px"}}>Back</button>
      </div>
    </div>
    </>
)
}
export default FailMessage;