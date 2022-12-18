import React from "react";

class FormInput extends React.Component {
    
    state = {
        inputData:this.props.value
      };
      handlechange = (event) => {
        this.setState({ inputData: event.target.value});
        this.props.onChange(this.state.inputData)
      }
  
    render() {
      return (
        <div>
            <label htmlFor={this.props.id}>{this.props.title}</label>
            <input value={this.state.inputData} onChange={this.handlechange} onBlur={this.handlechange} type="text" className="form-control" id={this.props.id}
             placeholder={this.props.placeholder} />
        </div>

      );
    }
  }

  export default FormInput