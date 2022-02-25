import React from 'react';
import { Games } from './games';
import axios from 'axios';

export class Reviews extends React.Component{

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
            games: [ ]
    };

    //Called every time the component is mounted
    //Grab game details from server
    componentDidMount(){
        axios.get('http://localhost:4000/api/games')
        .then((response)=>{
            console.log(response.data.games)
            this.setState({ games: response.data})
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    //Refresh
    ReloadData(){
        axios.get('http://localhost:4000/api/games')
        .then((response)=>{
            console.log(response.data.games)
            this.setState({ games: response.data})
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    render(){
        return(
            <div>
                <h1>Read some reviews!</h1>
                <Games games={this.state.games} ReloadData={this.ReloadData}></Games>
            </div>
        );
    }
}
