
import axios from 'axios'
import React from 'react'
import './Styles.css'
 class HomePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users : []
    }
  }
  componentDidMount(){
     /*
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
     */

    //OR 

    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{  
        this.setState({
          users : res.data
        })
    }) 
  }
  render(){
    let Names = this.state.users.map((user)=>{
      return <li key={user.id}>{user.name}</li>
     })
    // console.log()
    return (
        <div className="Home container">
          <h1>Home Page</h1>
          <p>This Is The Content Of The Home Page</p>
          <hr></hr>
          <h2>Here Is A List Of Users Names Have Been Called Using API</h2>
          <ul>
           {Names}
          </ul>
        </div>
    )
  }
}
export default HomePage;