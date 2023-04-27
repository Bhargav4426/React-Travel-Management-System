import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './InterCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './InternationalTourPackagesImages/SrilankaImages/img1.jpg'
import img2 from './InternationalTourPackagesImages/SrilankaImages/img2.jpg'
import img3 from './InternationalTourPackagesImages/SrilankaImages/img3.jpg'
const SrilankaTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgroundinter">
   <div className="header"><h1>Srilanka Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Discover Sri Lanka - 3 Cities Special</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Kandy | <span>2N</span> Bentoka | <span>1N</span> Colombo</b>
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
            <b><span className="spanrupee">&#8377;</span>48,622</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Discover Sri Lanka - 3 Cities Special',48622)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Premium 4N Trip To Sri Lanka</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Kandy | <span>1N</span> Bentoka | <span>1N</span> Colombo</b>
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
            <b><span className="spanrupee">&#8377;</span>46,729</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Premium 4N Trip To Sri Lanka',46729)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">7N/8D</span>
      <Card.Body>
        <Card.Title className='title'>Scenic Sri Lanka(Standard Hotels)</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Kandy | <span>2N</span> Bentoka | <span>2N</span> Colombo</b>
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
            <b><span className="spanrupee">&#8377;</span>57,560</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Scenic Sri Lanka(Standard Hotels)',57560)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    
    </div>
    </div>
        </>
    )

}
export default SrilankaTourPackages