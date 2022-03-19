import React from 'react';
import '../styles/Navbar.css'
import {Navbar,Container,Nav,NavbarBrand,NavLink} from 'reactstrap'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CatalogoView from '../Views/Catalogos/CatalogoView'
import CategoriaView from '../Views/Categorias/CategoriaView'
import ObjetoView from '../Views/Objetos/ObjetoView'

const NavbarApp = () => {
  return (
  <Router>
  {
    //menu
  }
    <Navbar className='Navbar' bg="light" expand="lg">
      <Container className="Container">
          <NavbarBrand style={{color:'rgb(141, 128, 87)'}} href="/"><strong>Lockers</strong></NavbarBrand>
      </Container>
      <Container className="Container">
          <Nav >
            <NavLink style={{color:'rgb(141, 128, 87)'}} href="/catalogos"><strong>Catálogos</strong></NavLink>
            <NavLink style={{color:'rgb(141, 128, 87)',marginLeft:'10%'}} href="/categorias"><strong>Categorías</strong></NavLink>
            <NavLink style={{color:'rgb(141, 128, 87)',marginLeft:'10%'}} href="/objetos"><strong>Objetos</strong></NavLink>
          </Nav>
      </Container>
    </Navbar>
    {
    //rutas
    }
    <Routes>
      <Route path='/' element={<></>}/>
      <Route path='/catalogos' element={<CatalogoView/>}/>
      <Route path='/categorias' element={<CategoriaView/>}/>
      <Route path='/objetos' element={<ObjetoView/>}/>
    </Routes>
  </Router>)

};

export default NavbarApp;
