import React, { Component } from 'react';
import './App.css';
import LeagueForm from './components/LeagueForm';
import Header from './components/Header';
import Banner from './components/Banner';
import CarouselInstance from './components/CorouselInstance';
import GraySection from './components/GraySection';
import LeagueSection from './components/LeagueSection';
import LeagueSponser from './components/LeagueSponser';


class App extends Component {

  constructor(props){
  super(props);
  this.state={
    showModal:false,
    index: 0,
    direction: null
  };
    this.toggleModal= this.toggleModal.bind(this);
    this.handleSelect= this.handleSelect.bind(this);
  }


handleSelect(selectedIndex, e){
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
}
  toggleModal(){
    this.setState({
      showModal:true
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
            <Header/>
            <Banner />
            <LeagueSection/>


        </div>
        <div className="row">
            <GraySection/>
        </div>
        <div className="container">
        <LeagueSponser/>
        <CarouselInstance index={this.state.index} direction={this.state.direction} handleSelect={this.handleSelect}/>
          <div className="clearfix"></div>

          <LeagueForm />

        </div>
      </div>
    );
  }
}

export default App;
