import React, { Component } from 'react'
import NavBarMenu from './NavBarMenu'

export default class RestaurantCreate extends Component {

    constructor()
    {
        super();
        this.state = {
            name: null,
            address: null,
            rating: null,
            email: null
        }
    }

    create()
    {
        //console.warn(this.state)
        fetch('http://localhost:3000/restaurant',{
            method: "post",
            headers:{
                      "Content-Type":"application/json"
                   },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert('Restaurant has been added')
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu />
                 <h1>Create Restaurant</h1>
                 <input 
                   onChange={(event)=>{this.setState({name:event.target.value})}}
                   placeholder="Enter Restaurant Name"
                 />
                 <br /><br />
                 <input 
                   onChange={(event)=>{this.setState({address:event.target.value})}}
                   placeholder="Enter Restaurant Address"
                 />
                 <br /><br />
                 <input 
                   onChange={(event)=>{this.setState({rating:event.target.value})}}
                   placeholder="Enter Restaurant Rating"
                 />
                 <br /><br />
                 <input 
                   onChange={(event)=>{this.setState({email:event.target.value})}}
                   placeholder="Enter Restaurant Email"
                 />
                 <br /><br />
                 <button onClick={()=>this.create()}>Add</button>
            </div>
        )
    }
}
