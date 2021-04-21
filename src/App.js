import React, { Component } from "react";
import './App.css';
import CharacterPage from "./components/CharacterPage";

const charactersURL= "https://breakingbadapi.com/api/characters";

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    fetch(charactersURL)
      .then(response => response.json())
      .then(characters => this.setState({characters}))
  }

  render() {
    return (
      <div className="App">
        <CharacterPage 
          characters={this.state.characters} 
        />
    </div>
    );
  }
}

export default App;
