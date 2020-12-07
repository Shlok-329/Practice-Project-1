import React from 'react'
import './App.css';
import { SearchBox } from './Components/Search-Box/search-box.component.jsx'
import { CardList } from './Components/Card-List/Card-List.components';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      Monsters: [],
      searchField: ''
    };

    this.altFunc = this.altFunc.bind(this); // Necessary if we are using simple functions
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({Monsters: users}));
  }

  func = (e) => {
    this.setState({searchField : e.target.value});
  };

  altFunc(e){ // This shows Difference between arraw and simple function
    this.setState({searchField : e.target.value});
  }

  render(){
    const {Monsters, searchField} = this.state;
    const filteredMonsters = Monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    return(
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monsters' func={this.altFunc} />
        <CardList monsters={filteredMonsters} />
      </div>
      // We will not write this.altFunc() in ablove div because it simply calls the function rather than assigning it to func
    )
  }
}

export default App;
