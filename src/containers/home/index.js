import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import Header from '../../components/Header';
import url from '../../data.txt';
import UserList from '../../components/UserList';
import ActiveUser from '../../components/ActiveUser';
import Search from '../../components/Search';

const links = [
  {
    title: 'Nav 1',
    active: true,
  },
  {
    title: 'Nav 2'
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultData: [],
      data: [],
      activeTab: 'firstTab',
      isErrorMessage: false,
      activeUser: null,
    }
  }

  componentWillMount() {
    console.log('Will MOUNT');
  }

  componentDidMount() {
  fetch(url)
    .then(respone => respone.json())
    .then(data => {
      this.setState({
        defaultData: data,
        data,
      })
    });
    console.log('DID MOUNT');

  }

  updateUser = (user) => {
    this.setState({
      activeUser: user,
    })
  }

  search = (e) => {
    console.log('123123');
    const { data, defaultData } = this.state;
    const value = e.target.value.toLowerCase();
    const filter = defaultData.filter(user => {
      return user.name.toLowerCase().includes(value);
    });
    this.setState({
      data: filter,
    })
    console.log('filter', filter);
  }


  render() {
    console.log('STATE', this.state);
    const {
      data,
    } = this.state;

    return (
      <div className="App home">
        <Header
          title="Header"
          links={links}
          // handleClick={this.handleClick}
        />
        <Search
          searchValue={this.search}
        />
        <div className="home__content">
          <div className="home__sidebar">
            <ActiveUser
              user={this.state.activeUser}
            />
          </div>
          <div className='home__wrapUsers'>
            <UserList
              data={data}
              activeUser={this.updateUser}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default Home;