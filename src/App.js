import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';


const links = [
  {
    title: 'Nav 1',
    active: true,
  },
  {
    title: 'Nav 2'
  },
];

const userList = [
  {
    id: 1,
    last_name: 'last_name',
    first_name: 'first_name',
    age: 123,
    img: 'http://echovis.tt.com.pl/images/img_avatar.png',
  },
  {
    id: 2,
    last_name: 'last_name',
    first_name: 'first_name',
    age: 123,
    img: 'http://echovis.tt.com.pl/images/img_avatar.png',
  },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenList: false,
      activeTab: 'firstTab',
      isErrorMessage: false,
    }
  }


  render() {
    console.log('RENDER', this);
    const {

    } = this.state;

    return (
      <div className="App">
        <Header
        //  title="Header"
         // links={links}
         // handleClick={this.handleClick}
        /> 
      </div>
    );
  }
}

export default App;
