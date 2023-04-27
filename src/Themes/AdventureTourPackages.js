import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ThemesCss.css'
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/RajasthanImages/img6.jpg'
import img2 from './DomesticTourPackagesImages/LehLadakhImages/img1.jpg'
import img3 from './DomesticTourPackagesImages/HimachalImages/img3.jpg'
import img4 from './DomesticTourPackagesImages/UttarakhandImages/img3.jpg'
import img5 from './DomesticTourPackagesImages/KarnatakaImages/img6.jpg'
import img6 from './DomesticTourPackagesImages/AndamanImages/img1.jpg'
const AdventureTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgroundthemes">
   <div className="header"><h1>Adventure Tour<span>Packages</span></h1></div>
   <div class="container" >
   <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1} />
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
      <Card.Img className="cardimg" variant="top" src={img2}/>
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Amazing Ladakh-Group Tour</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Leh | <span>1N</span> Nubra Valley | <span>1N</span> Pangong</b>
          </div>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Meals</li>
           <li>Freebies</li>
           </ul>
           </div>
           </td>
           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>35,300</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Amazing Ladakh-Group Tour',35300)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img3} />
      <span className="daysbadge">9N/10D</span>
      <Card.Body>
        <Card.Title className='title'>Incredible Himachal Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>3N</span> Shimla | <span>3N</span> Manali | <span>3N</span> Dharmashala</b>
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
            <b><span className="spanrupee">&#8377;</span>31,931</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Incredible Himachal Package',31931)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4} />
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
      <Card.Img className="cardimg" variant="top" src={img5} />
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Memorable Karnataka Vacation</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Coorg | <span>2N</span> Mysore | <span>2N</span> Ooty</b>
          </div>
          <br/>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Dubare Elephant Camp</li>
           <li>Jhari Waterfall</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>31,560</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Memorable Karnataka Vacation',31560)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6}/>
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Explore The Beautiful Andaman</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>2N</span> Port Blair | <span>2N</span> Havelock | <span>2N</span> Niel Island</b>
          </div>
          <br/>
          <br/>
          <table className="parent">
            <tr>
              <td>
            <div className="child1">
          <ul>
           <li>Half Day Adventure</li>
           <li>Light And Sound Show</li>
           </ul>
           </div>
           </td>
           <td>
           <div className="child2">
            <b><span className="spanrupee">&#8377;</span>27,647</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Explore The Beautiful Andaman',27647)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
   </div>
   </div>
        </>
    )

}
export default AdventureTourPackages