import React, { Component } from 'react' 
import { Link } from "react-router-dom";
export class Navbar extends Component {
   
  render() {    
    return (
        <nav className="navbar bg-dark navbar-expand-lg position-sticky top-0 z-3 px-md-4" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand fs-4 me-3" href="/">P.R.D. NEWS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-center">
                   <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                   <li className="nav-item"><Link className="nav-link" to='/business'>Business</Link></li>
                   <li className="nav-item"><Link className="nav-link" to='/entertainment'>Entertainment</Link></li> 
                   <li className="nav-item"><Link className="nav-link" to='/health'>Health</Link></li>
                   <li className="nav-item"><Link className="nav-link" to='/science'>Science</Link></li>
                   <li className="nav-item"><Link className="nav-link" to='/sports'>Sports</Link></li>
                   <li className="nav-item"><Link className="nav-link" to='/technology'>Technology</Link></li>
                </ul> 
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
  }
}

export default Navbar
