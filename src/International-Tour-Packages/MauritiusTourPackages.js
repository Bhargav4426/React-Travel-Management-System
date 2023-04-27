import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './InterCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './InternationalTourPackagesImages/MauritiusImages/img1.jpg'
import img2 from './InternationalTourPackagesImages/MauritiusImages/img2.jpg'
import img3 from './InternationalTourPackagesImages/MauritiusImages/img3.jpg'
const MauritiusTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgroundinter">
   <div className="header"><h1>Mauritius Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Super Deal In Mauritius!</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>6N</span> Mauritius</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Inclusions</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>1,16,572</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Super Deal In Mauritius!',116572)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Incredible Mauritius!</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>5N</span> Mauritius</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Inclusions</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>1,08,290</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Incredible Mauritius!',108290)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Vibrant Mauritius 4N</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>4N</span> Mauritius</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
          <li>Complimentary Inclusions</li>
           <li>Tour Manager</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>1,02,791</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Vibrant Mauritius 4N',102791)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    
    </div>
    </div>
        </>
    )

}
export default MauritiusTourPackages