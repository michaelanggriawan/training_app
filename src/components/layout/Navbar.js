import React,{ Component } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink as Navs,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Button 
} from 'reactstrap';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';


class Navbars extends Component {

    state = {
        isOpen: false,
        modal:false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggles = () => {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }

    render(){
      console.log(this.props.auth)
        const { isOpen } = this.state;
        const { auth } = this.props;
        const links = auth.uid ? (
        <Navbar color="dark" dark>
        <div className="container">
          <NavbarBrand href="/" className="mr-auto">TRAINING APP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={ !isOpen } navbar>
            <Nav navbar>
              <NavItem>
                <Navs>
                <NavLink id="RouterNavLink" to="/" style={{color: 'white', textDecoration: 'none'}}  className="subnav">List Training</NavLink>
                </Navs>
              </NavItem>
              <NavItem>
                <Navs>
                <NavLink id="RouterNavLink" to="/RequestTraining" style={{color: 'white', textDecoration: 'none'}}  className="subnav">Request Training</NavLink>
                </Navs>
              </NavItem>
              <NavItem>
                 <Navs>
                <NavLink id="RouterNavLink" to="/profile" style={{color: 'white', textDecoration: 'none'}} className="subnav" >Profile</NavLink>
                </Navs>
                <Navs><NavLink onClick={this.toggles} style={{color: 'white', textDecoration: 'none'}}>Log Out</NavLink></Navs>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Peringatan</ModalHeader>
                <ModalBody>
                  <h1 style={{textAlign: 'center'}}>Apakah Anda Yakin Ingin Keluar ??</h1>
                </ModalBody>
                <ModalFooter>
                  <Button color="dark" onClick={this.props.signOut}>Keluar</Button>
                </ModalFooter>
              </Modal>
              </NavItem>
              </Nav>
          </Collapse>
          </div>
        </Navbar>
        )  : (
          <Navbar color="dark" dark>
          <div className="container">
            <NavbarBrand href="/" className="mr-auto">TRAINING APP</NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse isOpen={ !isOpen } navbar>
            <Nav navbar>
              <NavItem>
                <Navs><NavLink to="/LogIn" style={{color:'white', textDecoration:'none'}}>Log In</NavLink></Navs>
              </NavItem>
              <NavItem>
               <NavLink to="/SignUp" style={{color:'white', textDecoration:'none'}}>Sign Up</NavLink>
              </NavItem>
              </Nav>    
            </Collapse>
          </div>
        </Navbar>
        )
        return(
            <div>
              {links}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
      auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch)=> {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);