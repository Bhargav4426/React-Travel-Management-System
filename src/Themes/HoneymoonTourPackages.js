import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ThemesCss.css'
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/KashmirImages/img6.jpg'
import img2 from './DomesticTourPackagesImages/HimachalImages/img4.jpg'
import img3 from './InternationalTourPackagesImages/MaldivesImages/img2.jpg'
const HoneymoonTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgroundthemes">
   <div className="header"><h1>Honeymoon Tour<span>Packages</span></h1></div>
   <div class="container" >
   <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1} />
      <span className="daysbadge">7N/8D</span>
      <Card.Body>
        <Card.Title className='title'>Kashmir Honeymoon Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Katra | <span>2N</span> Pahalgam | <span>3N</span> Srinagar</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>38,420</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Kashmir Honeymoon Package',38420)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Premium Fun Manali Honeymoon!</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Manali</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Bus Tickets</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>54,283</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Premium Fun Manali Honeymoon!',54283)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Maldives Honeymoon Trip Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>5N</span> Maldives</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Lunch</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>98,540</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Maldives Honeymoon Trip Package',98540)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
   </div>
   </div>
        </>
    )

}
export default HoneymoonTourPackages