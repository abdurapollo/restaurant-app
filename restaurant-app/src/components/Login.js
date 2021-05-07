import React, { Component } from 'react'
import NavBarMenu from './NavBarMenu'

export default class Login extends Component {
    constructor()
    {
        super();
        this.state={
            user: '',
            password: ''
        }
    }

    login()
    {
       fetch('http://localhost:3000/login?q='+this.state.user).then(result=>{
           result.json().then(resp=>{
               console.warn(resp)
               if(resp.length>0)
               {
                   localStorage.setItem('login',JSON.stringify(resp))
                   console.warn(this.props.history.push('list'))
               }
               else
               {
                   alert('User name & password is wrong')
               }
           })
       })
    }

    render() {
        return (
            <div>
                <NavBarMenu />
                <h1>Login</h1>
                <input type="text" onChange={(event)=>this.setState({user:event.target.value})} />
                <br /><br />
                <input type="password" onChange={(event)=>this.setState({password:event.target.value})} />
                <br /><br />
                <button onClick={()=>this.login()}>Login</button>
            </div>
        )
    }
}
