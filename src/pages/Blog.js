
import React from 'react'
import './Styles.css'
 class BlogPage extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return (
          <div className="Blog container">
            <h1>Blog Page</h1>
            <p>This Is The Content Of The Home Blog</p>
          </div>
      )
    }
  }
export default BlogPage;