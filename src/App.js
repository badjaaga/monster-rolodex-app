import React from "react";
import axios from 'axios';

import {CardField} from "./components/card-field/card-field.component";
import {SearchBox} from "./components/search-box/search-box.component";

import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => this.setState({monsters: response.data}))
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        const { monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className='container'>
                <h1>Monster rolodex</h1>
                <SearchBox placeholder='search monsters'
                           handleChange={this.handleChange}
                />
                <CardField monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;