import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DomCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/RajasthanImages/img1.jpg'
import img2 from './DomesticTourPackagesImages/RajasthanImages/img2.jpg'
import img3 from './DomesticTourPackagesImages/RajasthanImages/img3.jpg'
import img4 from './DomesticTourPackagesImages/RajasthanImages/img4.jpg'
import img5 from './DomesticTourPackagesImages/RajasthanImages/img5.jpg'
import img6 from './DomesticTourPackagesImages/RajasthanImages/img6.jpg'
const RajasthanTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgrounddom">
   <div className="header"><h1>Rajasthan Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Spectacular 3N in Udaipur Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Udaipur</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Photography Session</li>
           <li>Boat Cruise</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>14,793</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Spectacular 3N in Udaipur Package',14793)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Historical Jaipur 3N Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Jaipur</b>
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
            <b><span className="spanrupee">&#8377;</span>12,967</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Historical Jaipur 3N Package',12967)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Jaipur, Jodhpur & Udaipur Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Jaipur | <span>1N</span> Jodhpur | <span>2N</span> Udaipur</b>
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
            <b><span className="spanrupee">&#8377;</span>19,730</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Jaipur, Jodhpur & Udaipur Package',19730)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img5} />
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
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6} />
      <span className="daysbadge">7N/8D</span>
      <Card.Body>
        <Card.Title className='title'>Memorable Rajasthan Vacation</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Jaipur | <span>2N</span> Jodhpur | <span>2N</span> Udaipur</b>
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
            <b><span className="spanrupee">&#8377;</span>33,287</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Memorable Rajasthan Vacation',33287)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4} />
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
    </div>
    </div>
        </>
    )

}
export default RajasthanTourPackages