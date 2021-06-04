import React from "react";
import axios from 'axios';

import {SpacingGrid} from './components/card-field/card-field.component';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => this.setState({monsters: response.data}))
    }

    render() {
        return (
            <SpacingGrid monsters={this.state.monsters}/>
        )
    }
}

export default App;

/*<div>
    {
        this.state.monsters.map(monster => <h1>{monster.name}</h1>)
    }
</div>*/
