
import React from 'react'
import './Styles.css'
 class AboutPage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div className="About container">
          <h1>About Page</h1>
          <p>This Is The Content Of The Home About</p>
        </div>
    )
  }
}
export default AboutPage;

