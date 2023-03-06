import React , {useState}from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  , Link, NavLink, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import './pages/Styles.css'
import RoutPage from './pages/RoutTest';

function App() {
  return (
    <div className="App">       
      <BrowserRouter>
       <Header />   
        <Routes>                 
         <Route path="/" element={<HomePage/>} />  
         <Route path="/about" element={<AboutPage/>} />            
         <Route path="/blog" element={<BlogPage/>} />  
         {/* <Route path="*" element={<h1>This Page Not Found</h1>}/>    */}
         <Route path="/:test_param" element={<RoutPage/>}/>                     
         </Routes>  
         <Footer />           
        </BrowserRouter>         
    </div>
  );
}

class Header extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div className="Header">
          <h1 id="Logo">Logo</h1>
          <nav>
            <ul id="nav">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink   to='/about'>About</NavLink></li>
              <li><NavLink   to='/blog'>Blog</NavLink></li>
            </ul>
            </nav>       
        </div>
    )
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div className="Footer">
          <h1>Footer</h1>
          <p>Created BY Mohamed Emad -2023</p>       
        </div>
    )
  }
}
export default App;

