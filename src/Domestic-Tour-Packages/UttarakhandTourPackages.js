import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DomCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/UttarakhandImages/img1.jpg'
import img2 from './DomesticTourPackagesImages/UttarakhandImages/img2.jpg'
import img3 from './DomesticTourPackagesImages/UttarakhandImages/img3.jpg'
import img4 from './DomesticTourPackagesImages/UttarakhandImages/img4.jpg'
import img5 from './DomesticTourPackagesImages/UttarakhandImages/img5.jpg'
import img6 from './DomesticTourPackagesImages/UttarakhandImages/img6.jpg'
const UttarakhandTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgrounddom">
   <div className="header"><h1>Uttarakhand Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
      <span className="daysbadge">7N/8D</span>
      <Card.Body>
        <Card.Title className='title'>Do Dham-Group Tour(Standard)</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Rishikesh | <span>1N</span> Badrinath | <span>1N</span> Kedharnath | <span>2N</span> Guptakashi | <span>1N</span> Rudraprayag | <span>1N</span> Haridwar</b>
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
            <b><span className="spanrupee">&#8377;</span>34,410</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Do Dham-Group Tour(Standard)',34410)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">11N/12D</span>
      <Card.Body>
        <Card.Title className='title'>Char Dham-Group Tour(Premium)</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Kedharnath | <span>2N</span> Badrinath | <span>2N</span> Gangotri | <span>2N</span> Yamunotry | <span>2N</span> Haridwar | <span>1N</span> Barkot</b>
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
            <b><span className="spanrupee">&#8377;</span>50,856</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Char Dham-Group Tour(Premium)',50856)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Kedharnath Yatra-Group Tour</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Rushikesh | <span>2N</span> Guptakashi | <span>1N</span> Kedharnath | <span>1N</span> Haridwar</b>
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
            <b><span className="spanrupee">&#8377;</span>26,820</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Kedharnath Yatra-Group Tour',26820)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img5} />
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Hemkund Sahib Yatra</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Rishikesh | <span>1N</span> Joshimath | <span>1N</span> Ghangariya | <span>1N</span> Alleppey | <span>1N</span> Haridwar | <span>1N</span> Srinagar Garhwal</b>
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
            <b><span className="spanrupee">&#8377;</span>33,815</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Hemkund Sahib Yatra',33815)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6} />
      <span className="daysbadge">4N/5D</span>
      <Card.Body>
        <Card.Title className='title'>Road Trip To Mussoorie&Nainital</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Mussoorie| <span>2N</span>Nainital</b>
          </div>
          <br/>
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
            <b><span className="spanrupee">&#8377;</span>17,392</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Road Trip To Mussoorie&Nainital',17392)}>BOOK NOW</Button>
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
    </div>
    </div>
        </>
    )

}
export default UttarakhandTourPackages