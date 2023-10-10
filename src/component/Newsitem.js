import React, { Component } from "react";
import myImage from '../news.jpg';

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl, url , author , date , source} = this.props;
    return (
      <div className="carde border my-2 position-relative"> 
        <img
          src={!imgurl?myImage:imgurl} 
          className="card-img-top"
          alt="..."
          style={{width: "100%", height: "200px" , objectFit: "cover"}}
        />
        <div className="card-body p-3">
          <h5 className="card-title">{title}</h5>
          <p className="card-text my-0">{description}</p>
          <p className="card-text pt-1"> <small className="text-muted"> by {author}, on {date} </small></p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-dark">Read More ...</a>
          <span className="badge  text-bg-danger position-absolute top-0 end-0 m-3 py-2">{source}</span>
        </div>
      </div>
    );
  }
}

export default Newsitem;
