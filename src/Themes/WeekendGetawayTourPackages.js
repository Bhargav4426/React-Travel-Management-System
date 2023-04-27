import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ThemesCss.css'
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/RajasthanImages/img4.jpg'
import img2 from './DomesticTourPackagesImages/KarnatakaImages/img4.jpg'
import img3 from './DomesticTourPackagesImages/KarnatakaImages/img2.JPG'
import img4 from './DomesticTourPackagesImages/UttarakhandImages/img4.jpg'
import img5 from './DomesticTourPackagesImages/GoaImages/img2.jpg'
import img6 from './DomesticTourPackagesImages/RajasthanImages/img5.jpg'
const WeekendGetawayTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgroundthemes">
   <div className="header"><h1>Weekend Getaway Tour<span>Packages</span></h1></div>
   <div class="container" >
   <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Delightful Jaipur Getaway Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Jaipur | <span>1N</span> Pushkar</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Photography Session</li>
           <li>Bus Ticket</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>13,467</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Delightful Jaipur Getaway Package',13467)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">2N/3D</span>
      <Card.Body>
        <Card.Title className='title'>Weekend Gateway To Sakleshpur</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span>Sakleshpur</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Bisle Reserve Forest</li>
           <li>Agni Gudda Temple</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>12,449</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Weekend Gateway To Sakleshpur',12449)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Weekend Escape To Ooty & Mysore</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Mysore | <span>2N</span> Ooty</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>St.Philomena Church</li>
           <li>Chamuundi Hills</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>12,755</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Weekend Escape To Ooty & Mysore',12755)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4} />
      <span className="daysbadge">1N/2D</span>
      <Card.Body>
        <Card.Title className='title'>One-Day Haridwar Getaway Tour</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Haridwar</b>
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
            <b><span className="spanrupee">&#8377;</span>7,170</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('One-Day Haridwar Getaway Tour',7170)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img5} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Gateway To Goa 3N(land Only)</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Goa</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Photography Sesion</li>
           <li>North Goa Sightseeing</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>6,026</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Gateway To Goa 3N(land Only)',6026)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6} />
      <span className="daysbadge">2N/3D</span>
      <Card.Body>
        <Card.Title className='title'>Weekend Trip to Jaipur Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Jaipur</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Photography Session</li>
           <li>Amer Fort</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>10,071</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Weekend Trip to Jaipur Package',10071)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
   </div>
   </div>
        </>
    )

}
export default WeekendGetawayTourPackages