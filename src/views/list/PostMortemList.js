import React from "react";
import Card from "./Card";

class PostMortemList extends React.Component {
    handleSelectOne = (id) => {
        this.props.onClick(id);
    }
    render(){
        const pms = this.props.PMList.map(
            (pm) => {
                return(<Card 
                  id = {pm.id}
                  key = {pm.id}
                  name={pm.name}
                  subName={pm.subName}
                  team={pm.team}
                  cause={pm.cause}
                  buttonText="Ok"
                  onClick = {this.handleSelectOne}
                  />);
                }
        );
              
        return(
            <div className="container">
                {pms}
            </div>
        )
    }
}

export default PostMortemList