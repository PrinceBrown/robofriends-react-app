import React, { Component } from 'react';
import CardList from './CardList';
import Search from './Search'
import { robots } from './Robots';


class App extends Component {

  state = {
    robots : robots,
    robotsEmail:robots,
    SearchField : ''
  }

  onFriendsSearch = (event) => {
    this.setState({SearchField : event.target.value})
    console.log(event.target.value)

  };

 

  render() {
    
      const filteredRobots = this.state.robots.filter(robotfriend => {
        return robotfriend.name.toLocaleLowerCase().includes(this.state.SearchField.toLocaleLowerCase())
      })


    return (
      <div className="App ">
          <div className="tc">
            <h1>RoboFriends</h1>
            <Search userIsTyping = {this.onFriendsSearch}/>
            
        <CardList robots = {filteredRobots}  />
        </div> 

      </div>
    );
  }
}

export default App;
