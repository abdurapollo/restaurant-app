import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from './NavBarMenu'
 

export class RestaurantsList extends Component {

    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        this.getData()
    }

    getData()
    {
        fetch('http://localhost:3000/restaurant').then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
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
                this.getData()
            })
        })
    }

    render() {
        console.warn(this.state)
        return (
            <div>
                <NavBarMenu />
                <h1>Restaurants List</h1>
                {
                    this.state.list ?
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
                                        this.state.list.map((item, i) =>
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
                        </div> :
                        <p>Please wait....</p>
                }
            </div>
        )
    }
}

export default RestaurantsList

