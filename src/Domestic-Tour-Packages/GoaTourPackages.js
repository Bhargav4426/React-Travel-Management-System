import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './DomCardsCss.css';
import img1 from './DomesticTourPackagesImages/GoaImages/img1.jpg'
import img2 from './DomesticTourPackagesImages/GoaImages/img2.jpg'
import img3 from './DomesticTourPackagesImages/GoaImages/img3.jpg'
import img4 from './DomesticTourPackagesImages/GoaImages/img4.jpg'
import img5 from './DomesticTourPackagesImages/GoaImages/img5.jpg'
import img6 from './DomesticTourPackagesImages/GoaImages/img6.jpg'
const GoaTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgrounddom">
   <div className="header"><h1>Goa Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Amazing Goa Land Only Deal 5N</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>5N</span> Goa</b>
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
            <b><span className="spanrupee">&#8377;</span>10,513</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Amazing Goa Land Only Deal 5N',10513)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Luxury Special Land Only Deal 5N</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>5N</span> Goa</b>
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
            <b><span className="spanrupee">&#8377;</span>11,154</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Luxury Special Land Only Deal 5N',11154)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
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
      <Card.Img className="cardimg" variant="top" src={img5} />
      <span className="daysbadge">2N/3D</span>
      <Card.Body>
        <Card.Title className='title'>Amazing Goa Land Only Deal 2N</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Goa</b>
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
            <b><span className="spanrupee">&#8377;</span>5,129</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Amazing Goa Land Only Deal 2N',5129)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6} />
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Amazing Goa Land Only Deal 2N</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>6N</span> Goa</b>
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
            <b><span className="spanrupee">&#8377;</span>11,229</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Amazing Goa Land Only Deal 2N',11229)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>All-Inclusive 3N Holiday-sightseeing</Card.Title>
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
            <b><span className="spanrupee">&#8377;</span>11,604</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('All-Inclusive 3N Holiday-sightseeing',11604)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    </div>
    </div>
        </>
    )

}
export default GoaTourPackages