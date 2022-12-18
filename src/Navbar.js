import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="navbar-nav mr-auto">
    <span className="navbar-brand">PM Storage</span>
        <span className="nav-link" href="#"><Link to="/">Create</Link></span>
        <span className="nav-link" href="#"><Link to="/view">View All</Link></span>
      
    </div>
    
  </div>
</nav>
        )
    }
}

export default Navbar