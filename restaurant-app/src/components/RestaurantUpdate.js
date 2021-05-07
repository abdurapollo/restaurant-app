import React, { Component } from 'react'
import NavBarMenu from './NavBarMenu'

export class RestaurantUpdate extends Component {

    constructor()
    {
        super();
        this.state = {
            name: null,
            address: null,
            rating: null,
            email: null,
            id: null
        }
    }

   componentDidMount()
   {
       fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((response) => {
        response.json().then((result) => {
            console.warn(result)
            this.setState({ 
                name: result.name,
                address: result.address,
                rating: result.rating,
                email: result.email,
                id: result.id
            })
        })
    })
   }
   update()
   {
        fetch('http://localhost:3000/restaurant/'+this.state.id,{
            method: "put",
            headers:{
                    "Content-Type":"application/json"
                },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert('Restaurant has been updated')
            })
        })
   }

    render() {
        return (
            <div>
                 <NavBarMenu />
                <h1>Update Restaurant</h1>
                <input 
                   onChange={(event)=>{this.setState({name:event.target.value})}}
                   placeholder="Enter Restaurant Name"
                   value={this.state.name}
                 />
                 <br /><br />
                 <input 
                   onChange={(event)=>{this.setState({address:event.target.value})}}
                   placeholder="Enter Restaurant Address"
                   value={this.state.address}
                 />
                 <br /><br />
                 <input 
                   onChange={(event)=>{this.setState({rating:event.target.value})}}
                   placeholder="Enter Restaurant Rating"
                   value={this.state.rating}
                 />
                 <br /><br />
                 <input 
                   onChange={(event)=>{this.setState({email:event.target.value})}}
                   placeholder="Enter Restaurant Email"
                   value={this.state.email}
                 />
                 <br /><br />
                 <button onClick={()=>this.update()}>Update</button>
            </div>
        )
    }
}

export default RestaurantUpdate
