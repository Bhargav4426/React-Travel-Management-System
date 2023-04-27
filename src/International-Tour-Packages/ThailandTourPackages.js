import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './InterCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './InternationalTourPackagesImages/ThailandImages/img1.jpg'
import img2 from './InternationalTourPackagesImages/ThailandImages/img2.jpg'
import img3 from './InternationalTourPackagesImages/ThailandImages/img3.jpg'
const ThailandTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgroundinter">
   <div className="header"><h1>Thailand Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Phuket Island Escape</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>4N</span> Phuket</b>
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
            <b><span className="spanrupee">&#8377;</span>73,621</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Phuket Island Escape',73621)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Explore Amazing Phuket</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>5N</span> Phuket</b>
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
            <b><span className="spanrupee">&#8377;</span>78,617</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Explore Amazing Phuket',78617)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Pattaya&Bangkok Getaway</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Pattaya | <span>2N</span> Bangkok</b>
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
            <b><span className="spanrupee">&#8377;</span>62,191</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Pattaya&Bangkok Getaway',62191)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    
    </div>
    </div>
        </>
    )

}
export default ThailandTourPackages