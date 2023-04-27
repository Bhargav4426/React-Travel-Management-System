import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DomCardsCss.css';
import { useNavigate } from 'react-router-dom';
import img1 from './DomesticTourPackagesImages/LehLadakhImages/img1.jpg'
import img2 from './DomesticTourPackagesImages/LehLadakhImages/img2.jpg'
import img3 from './DomesticTourPackagesImages/LehLadakhImages/img3.jpg'
import img4 from './DomesticTourPackagesImages/LehLadakhImages/img4.jpg'
import img5 from './DomesticTourPackagesImages/LehLadakhImages/img5.jpg'
import img6 from './DomesticTourPackagesImages/LehLadakhImages/img6.jpg'
const LehLadakhTourPackages=()=>{
  const navigate=useNavigate();
  const Tour_Register=(parm1Value,parm2Value)=>{
    navigate('/tourregisterform',{state :{parm1: parm1Value, parm2: parm2Value} } );
  }
    return(
        <>
   <div className="cardsbackgrounddom">
   <div className="header"><h1>LehLadakh Tour<span>Packages</span></h1></div>
   <div class="container" >
     <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img1}/>
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
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Premium Best Of Ladakh</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>4N</span> Leh | <span>2N</span> Nubra Valley</b>
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
            <b><span className="spanrupee">&#8377;</span>52,216</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Premium Best Of Ladakh',52216)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img2} />
      <span className="daysbadge">6N/7D</span>
      <Card.Body>
        <Card.Title className='title'>Ladakh Package For Couples</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>4N</span> Leh | <span>1N</span> Nubra Valley | <span>1N</span> Pangong</b>
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
            <b><span className="spanrupee">&#8377;</span>55,642</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Ladakh Package For Couples',55642)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img5} />
      <span className="daysbadge">5N/6D</span>
      <Card.Body>
        <Card.Title className='title'>Magical Ladakh Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Leh</b>
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
            <b><span className="spanrupee">&#8377;</span>40,571</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Magical Ladakh Package',40571)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img6} />
      <span className="daysbadge">7N/8D</span>
      <Card.Body>
        <Card.Title className='title'>Memorable Kerala Vacation Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>4N</span> Leh | <span>2N</span> Nubra Valley | <span>1N</span> Pangong</b>
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
            <b><span className="spanrupee">&#8377;</span>60,213</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Memorable Kerala Vacation Package',60213)}>BOOK NOW</Button>
      </Card.Body>
    </Card> 
    </div>
    <div class="box">
    <Card style={{ width: '23rem' }} className="cardd">
      <Card.Img className="cardimg" variant="top" src={img4} />
      <span className="daysbadge">3N/4D</span>
      <Card.Body>
        <Card.Title className='title'>Ladakh For Nature Lovers Package</Card.Title>
        <Card.Text>
          <div>
          <b className="boldhead"><span>1N</span> Leh | <span>1N</span> Nubra Valley | <span>1N</span> Pangong</b>
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
            <b><span className="spanrupee">&#8377;</span>30,754</b><br/><span className="person">per person</span>
          </div>
          </td>
          </tr>
          </table>
        </Card.Text>
        <Button variant="primary" className='buttoncard' onClick={()=>Tour_Register('Ladakh For Nature Lovers Package',30754)}>BOOK NOW</Button>
      </Card.Body>
    </Card>
    </div> 
    </div>
    </div>
        </>
    )

}
export default LehLadakhTourPackages