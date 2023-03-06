
import React from 'react'
import { useParams } from 'react-router-dom'
import './Styles.css'

    
const RoutPage = (props)=>{
    let routDetails = useParams() 
    console.log(routDetails)
    return (
        <div className="Rout container">
          <h1>Rout Page</h1>
          <p>This Is The Content Of The  Rout</p>
          <p>The Param is <span style={{color : 'blue' , fontSize:'30px' , fontWeight:'bold'}}>
            {routDetails.test_param}</span></p>
        </div>
      )
}
    
export default RoutPage;