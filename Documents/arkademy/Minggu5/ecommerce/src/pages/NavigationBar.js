import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Navbar
} from ''

class NavigationBar extends React.Component{

  render(){
    return(
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand>Rick and Morty</NavbarBrand>
          
        </Container>
      </Navbar>
    )
  }
}