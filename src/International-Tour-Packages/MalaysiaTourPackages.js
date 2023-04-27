import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './InterCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './InternationalTourPackagesImages/MalaysiaImages/img1.jpg'
import img2 from './InternationalTourPackagesImages/MalaysiaImages/img2.jpg'
import img3 from './InternationalTourPackagesImages/MalaysiaImages/img3.jpg'
const MalaysiaTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgroundinter">
   <div className="header"><h1>Malaysia Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Family Fun At Malaysia Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Kuala Lumpur | <span>1N</span> Penang | <span>1N</span> Langkawi</b>
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
            <b><span className="spanrupee">&#8377;</span>66,496</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Family Fun At Malaysia Package',66496)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Budget-Friendly Malaysia Holiday</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Kuala Lumpur | <span>1N</span> Penang | <span>1N</span> Langkawi</b>
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
            <b><span className="spanrupee">&#8377;</span>59,455</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Budget-Friendly Malaysia Holiday',59455)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">8N/9D</span>
      <Card.Body>
        <Card.Title className='title'>Malaysia Fully Loaded Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Kuala Lumpur | <span>2N</span> Penang | <span>3N</span> Langkawi</b>
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
            <b><span className="spanrupee">&#8377;</span>99,901</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Malaysia Fully Loaded Package',99901)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    
    </div>
    </div>
        </>
    )

}
export default MalaysiaTourPackages