
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import CreateForm from './views/create/Create';
import ViewAll from './views/list/ViewAll';
import dataSource from './dataSource';
import EditForm from './views/edit/Edit';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
class App extends React.Component {

  state = {PMList : [], currentlySelectedPM: -1};

  componentDidMount(){
    this.loadPostmortems();
  }

  loadPostmortems = async () => {
    const response = await dataSource.get("/postmortems");
    this.setState({PMList: response.data});
    
  }

  editPM = (pmId) =>{
    console.log(pmId);
    var indexNum = 0;
    for(var i = 1; i < this.state.PMList.length; i++){
      if(this.state.PMList[i].id === pmId)
        indexNum = i;
      
    }
    this.setState({currentlySelectedPM : indexNum}, 
      history.push('/edit/'+indexNum),
          console.log(this.state));
  }
  render(){
  return(
    <Router history = {history}>
        <Navbar />
        <Routes>
        <Route path="/" element={<CreateForm />}/>
        <Route path="/view" element={<ViewAll PMList={this.state.PMList} onClick={this.editPM}/>}/>
        <Route path="/edit/:albumId" element={<EditForm pm={this.state.PMList[this.state.currentlySelectedPM]} />} />
        </Routes>

</Router>)

    
  }
}

export default App;
