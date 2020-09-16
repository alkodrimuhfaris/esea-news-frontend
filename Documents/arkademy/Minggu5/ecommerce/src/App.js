import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {default as axios} from 'axios'

import SeriesList from './components/SeriesList'
import Sapa from './components/Sapa'
import Sapa2 from './components/Sapa2'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'

class Series extends Component{
  getData = async (url) => {
    const data = await fetch(url)
    const result = await data.json()
    console.log(data.body)
  }

  state = {
    data: {}
  }

  async componentDidMount(){
    // const data = await this.getData('https://rickandmortyapi.com/api/episode/')
    const data = await axios.get('https://rickandmortyapi.com/api/episode/')
    this.setState(data)
   
  }

  render(){
    console.log('render parent')
    return(
      <React.Fragment>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/episode" component={NavigationBar} exact />
          </Switch>
      </React.Fragment>
    )
  }
}

//tugas! reactstrap!
//react router dom


export default Series;

