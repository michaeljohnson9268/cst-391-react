import axios from "axios";
import React from "react";
import FormInput from "../FormInput";

class CreateForm extends React.Component {
    
    state = {
        name: '',
        subName: '',
        team: '',
        cause: ''
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
        axios.post('http://localhost:3000/create', postmortem)
        
      }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h1>Create a new Postmortem</h1>
            <div className="form-group">
                <FormInput type="text"  onChange={this.updateName} id="Postmortem Name" title="Postmortem Name"  placeholder="Enter Name" />
                <FormInput type="text"  onChange={this.updateSubName} id="Postmortem Sub-Name" title="Postmortem Sub-Name"  placeholder="Enter Sub-Name" />
                <FormInput type="text"  onChange={this.updateTeam} id="Postmortem Team" title="Postmortem Team"  placeholder="Enter Team" />
                <FormInput type="text"  onChange={this.updateCause} id="Postmortem Cause" title="Postmortem Cause"  placeholder="Enter Cause" />
            </div>
            
            <button type="submit" value={this.state.value} onChange={this.handleChange} class="btn btn-primary">Submit</button>
        </form>

      );
    }
  }

  export default CreateForm