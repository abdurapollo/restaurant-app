import React, { Component } from 'react'
import NavBarMenu from './NavBarMenu'
import { Table, Form, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default class RestaurantSearch extends Component {

   constructor()
   {
       super();
       this.state={
           searchData: null,
           noData: false,
           lastSearch: ''
       }
   }

   search(key)
   {
       this.setState({lastSearch:key})
       fetch('http://localhost:3000/restaurant?q='+key).then(result=>{
           result.json().then(resp=>{
               console.warn(resp)
               if(resp.length>0)
               {
                   this.setState({searchData: resp, noData: false})
               }
               else
               {
                this.setState({noData: true, searchData:null})
               }
           })
       })
   }
   delete(id)
   {
       fetch('http://localhost:3000/restaurant/'+id,
       {
           method: "DELETE",
       }).then((result)=>{
           result.json().then((resp)=>{
               alert('Restaurant has been deleted')
               this.search(this.state.lastSearch)
           })
       })
   }
    render() {
        return (
            <Container>
                 <NavBarMenu />
                <h1>Search Restaurant</h1>
                <Form.Control type="text" onChange={event=>this.search(event.target.value)} placeholder="Search Restaurant" />
                {
                    this.state.searchData ?
                    <div>
                        <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                       {
                           this.state.searchData.map((item)=>
                                <tr>
                                   <td>{item.id}</td>
                                   <td>{item.name}</td>
                                   <td>{item.address}</td>
                                   <td>{item.email}</td>
                                   <td>{item.rating}</td>
                                   <td><NavLink to={"/update/"+item.id} className="mr-3"><FontAwesomeIcon icon={faEdit} color="orange" /></NavLink>
                                   <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrashAlt} color="red" /></span></td>
                               </tr>
                           )
                       }
                        </tbody>
                            </Table>
                    </div> : null
                }
                {
                   this.state.noData ? <h3>No data found</h3> : null
                }
            </Container>
        )
    }
}
