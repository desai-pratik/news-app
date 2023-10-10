import "./App.css";
import React, { Component} from "react";
import Navbar from "./component/Navbar";
import News from "./component/News"; 
import LoadingBar from 'react-top-loading-bar';
 

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = "65019a87209c4340b6d20fb81b4625b5";
  state = {
    progress: 0
  }
  setProgress=(progress) => {
    this.setState({ progress: progress })
  }


  updateSelectValue = (newValue) => {
    this.setState({ selectValue: newValue });
  }

  
  render() { 
    return (
      <div>
        {/* <Router> */}
          {/* <Navbar/> */}
          <Navbar updateSelectValue={this.updateSelectValue} />

          <LoadingBar color='#f11946' height={3} progress={this.state.progress} />

           {/* <p>Selected value: {this.state.selectValue}</p> */}
       
          <News setProgress={this.setProgress} apiKey={this.apiKey} key={this.state.selectValue} pagesize={6} country="in" category={this.state.selectValue} />

          {/* <Routes>
            <Route exact path="/newsApp" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={6} country="in" category="general" />} />
           
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={6} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pagesize={6} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pagesize={6} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={6} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize={6} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize={6} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pagesize={6} country="in" category="technology" />} />
          </Routes>
        </Router> */}
      </div>
    );
  }
}
