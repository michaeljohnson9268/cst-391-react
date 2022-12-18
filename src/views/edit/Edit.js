import axios from "axios";
import React from "react";
import FormInput from "../FormInput";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
class EditForm extends React.Component {
    
    state = {
        id: this.props.pm.id,
        name: this.props.pm.name,
        subName: this.props.pm.subName,
        team: this.props.pm.team,
        cause: this.props.pm.cause
      };

      
      updateName = (event) => {
        this.setState({ name: event});
        console.log(this.state);
      }
      updateSubName = (event) => {
        this.setState({ subName: event});
        console.log(this.state);
      }
      updateTeam = (event) => {
        this.setState({ team: event});
        console.log(this.state);
      }
      updateCause = (event) => {
        this.setState({ cause: event});
        console.log(this.state);
      }

      handleSubmit = (e) => {
        this.savePostmortem(this.state);
      }
      savePostmortem = async (postmortem) => {
        axios.put('http://localhost:3000/update', postmortem);
        history.push('/')
      }
      deletePostmortem = async (postmortem) => {
        axios.delete('http://localhost:3000/delete/' +this.state.id);
        history.push('/')
      }
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Edit Postmortem</h1>
            <div className="form-group">
                <FormInput type="text" value={this.props.pm.name} onChange={this.updateName} id="Postmortem Name" title="Postmortem Name"  placeholder="Enter Name" required />
                <FormInput type="text" value={this.props.pm.subName} onChange={this.updateSubName} id="Postmortem Sub-Name" title="Postmortem Sub-Name"  placeholder="Enter Sub-Name" />
                <FormInput type="text" value={this.props.pm.team} onChange={this.updateTeam} id="Postmortem Team" title="Postmortem Team"  placeholder="Enter Team" />
                <FormInput type="text" value={this.props.pm.cause} onChange={this.updateCause} id="Postmortem Cause" title="Postmortem Cause"  placeholder="Enter Cause" />
            </div>
            
            <button type="submit" value="Submit" onChange={this.handleChange} className="btn btn-primary">Submit</button>
        </form>
        <form onSubmit={this.deletePostmortem}>
        <button type="submit" value="Delete"  className="btn btn-primary">Delete</button>

        </form>
        </div>
      );
    }
  }

  export default EditForm