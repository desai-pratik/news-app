import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
 

export class Navbar extends Component {

  constructor() {  
    super();  
    this.vla = {selectValue: ''}; 
  }
  handleChange = (event) => {
    const newValue = event.target.value;
    this.setState({ selectValue: newValue }, () => {
      this.props.updateSelectValue(newValue);
    });
  }
  
  render() {   

    return (
        <nav className="navbar bg-dark navbar-expand-lg position-sticky top-0 z-3 px-md-4" data-bs-theme="dark">
            <div className="container d-flex justify-content-between">
              <div className="d-flex">
                <a className="navbar-brand fs-4 me-3" href="/">P.R.D. NEWS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll"> 

                {/* <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-center">
                   <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                   <li className="nav-item"><Link className="nav-link" to='/business'>Business</Link></li>
                   <li className="nav-item"><Link className="nav-link" to='/entertainment'>Entertainment</Link></li> 
                   <li className="nav-item"><Link className="nav-link" to='/health'>Health</Link></li>
                   <li className="nav-item"><Link className="nav-link" to='/science'>Science</Link></li>
                   <li className="nav-item"><Link className="nav-link" to='/sports'>Sports</Link></li>
                   <li className="nav-item"><Link className="nav-link" to='/technology'>Technology</Link></li>
                   </ul>  */}
                   <select className="form-select"  onChange={this.handleChange} > 
                    <option value="general">General</option>
                    <option value="Business">Business</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                    <option value="Science">Science</option>
                    <option value="Sports">Sports</option>
                    <option value="Technology">Technology</option>
                  </select>
                  </div>
                </div>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
  }
}

export default Navbar
