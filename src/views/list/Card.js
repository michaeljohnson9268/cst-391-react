/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

/* eslint-disable jsx-a11y/img-redundant-alt */
class Card extends React.Component {

    handleButtonClick = event => {
        console.log(this.props.id);
        this.props.onClick(this.props.id);
    }
    render(){
        return (
            <div className="card" style={{width: '18rem'}}>
             
                <div className="card-body">
                  <h5 className="card-title">{this.props.name}</h5>
                  <p className="card-text">{this.props.subName}</p>
                  <p className="card-text">{this.props.team}</p>
                  <p className="card-text">{this.props.cause}</p>
                  <a href="#" onClick={this.handleButtonClick} className="btn btn-primary">Select</a>
                </div>
              </div>
            );
    }
}


export default Card;