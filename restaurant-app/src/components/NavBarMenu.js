import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faSearch, faEdit, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import {Navbar, Nav} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, NavLink  } from 'react-router-dom'

export default class NavBarMenu extends Component {
    render() {
        return (
            <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Resto</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/" className="mr-3"><FontAwesomeIcon icon={faHome} />Home</NavLink>
                    <NavLink to="/create" className="mr-3"><FontAwesomeIcon icon={faPlus} />Create</NavLink>
                    <NavLink to="/list" className="mr-3"><FontAwesomeIcon icon={faList} />List</NavLink>
                    <NavLink to="/search" className="mr-3"><FontAwesomeIcon icon={faSearch} />Search</NavLink>
                    <NavLink to="/update" className="mr-3"><FontAwesomeIcon icon={faEdit} />Update</NavLink>
                    {
                        localStorage.getItem('login') ?
                        <NavLink to="/logout" className="mr-3"><FontAwesomeIcon icon={faUser} />Logout</NavLink>
                        : 
                        <NavLink to="/login" className="mr-3"><FontAwesomeIcon icon={faUser} />Login</NavLink>
                    }
                    
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
