/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import dataSource from '../../dataSource';
import PostMortemList from './PostMortemList';
import './ViewAll.css'

class ViewAll extends React.Component {

  state = {PMList : [], searchPhrase:""};
  handleSelectOne = (id) => {
    this.props.onClick(id);
}
  componentDidMount(){
    this.loadPostmortems();
  }

  loadPostmortems = async () => {
    const response = await dataSource.get("/postmortems");
    this.setState({PMList: response.data});
  }
    
  render(){
  return (
    <div>
      <h1>View Postmortems</h1>
      <div className='container'>
        
        <PostMortemList PMList={this.props.PMList} onClick = {this.handleSelectOne} />
      </div>
    </div>
    
   
  )
  }
}

export default ViewAll;
