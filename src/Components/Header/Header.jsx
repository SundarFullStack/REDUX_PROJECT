  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import {NavLink} from 'react-router-dom';
import { useCart } from '../Context/Cart.Context';
  

  function Header() {

   const {Cart=[]}= useCart();


    return (
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand> 
              {/* LOGO */}
               <img
              alt=""
              src='https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Mobile-Smartphone-icon.png'
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            {/* NAVBAR HEADER */}
            <h6 className='mt-1'>HiFi Mobiles</h6></Navbar.Brand>

            {/* COMPONENTS NAVIGATION ROUTING LINKS */}
            <Nav className="me-auto mt-2">
        <ul>
        <li ><NavLink to="/">Home</NavLink></li>
              <li ><NavLink to="/Mobiledetails/Mobiles">Mobiles</NavLink></li>
              <li ><NavLink to="/Cart">Cart <span style={{backgroundColor:'grey',marginLeft:'3px',borderRadius:'5px',padding:'5px'}}><b>{Cart.length}</b></span></NavLink></li>
        </ul>
            </Nav>
          </Container>
        </Navbar>

      </div>
    );
  }

  export default Header;