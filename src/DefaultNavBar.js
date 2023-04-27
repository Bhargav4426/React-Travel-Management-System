import 'bootstrap/dist/css/bootstrap.min.css';
import "./DefaultNavBar.css"
import logo4 from './images/logo.png'
import {Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
const DefaultNavBar=()=>{
    return(
        <>
        <div className="navbardiv">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand className="logo" href="/"><img src={logo4} alt="Not Found"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Domestic Tour Packages" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/keralatourpackages">&bull; Kerala Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/goatourpackages">&bull; Goa Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/rajasthantourpackages">&bull; Rajasthan Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/kashmirtourpackages">&bull; Kashmir Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/lehladakhtourpackages">&bull; Leh Ladakh Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/himachaltourpackages">&bull; Himachal Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/andamantourpackages">&bull; Andaman Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/uttarakhandtourpackages">&bull; Uttarakhand Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/karnatakatourpackages">&bull; Karnataka Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/tamilnadutourpackages">&bull; Tamil Nadu Tour Packages</NavDropdown.Item>
          </NavDropdown>    
          <NavDropdown title="International Tour Packages" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/dubaitourpackages">&bull; Dubai Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/malaysiatourpackages">&bull; Malaysia Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/singaporetourpackages">&bull; Singapore Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/thailandtourpackages">&bull; Thailand Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/balitourpackages">&bull; Bali Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/europetourpackages">&bull; Europe Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/mauritiustourpackages">&bull; Mauritius Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/maldivestourpackages">&bull; Maldives Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/australiatourpackages">&bull; Australia Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/srilankatourpackages">&bull; Srilanka Tour Packages</NavDropdown.Item>
          </NavDropdown> 
          <NavDropdown title="Themes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/honeymoontourpackages">&bull; Honeymoon Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/adventuretourpackages">&bull; Adventure Tour Packages </NavDropdown.Item>
              <NavDropdown.Item href="/familytourpackages">&bull; Family Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="/weekendgetawaytourpackages">&bull; Weekend Getaway Tour Packages</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="/about"><button type="button" class="btn btn-primary btn-sm" id="button1">About Us</button></Nav.Link>
          <Nav.Link href="/contact"><button type="button" class="btn btn-success btn-sm" id="button2">Contact US</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>     
    </div>
        </>
    )

}
export default DefaultNavBar;