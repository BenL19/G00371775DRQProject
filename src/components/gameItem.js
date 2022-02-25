import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export class GameItem extends React.Component {

    constructor(){
        super();

        this.DeleteGame = this.DeleteGame.bind(this);
    }

    //Delte method to delete game review post
    DeleteGame(e){
        //prevent from being called upon reload of page
        e.preventDefault();
        console.log("Delete: "+this.props.game._id);

        axios.delete("http://localhost:4000/api/games/"+this.props.game._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.game.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.game.cover} width="200" height="300"></img>
                            <hr></hr>
                            {this.props.game.year}
                            <br></br>
                            {this.props.game.genre}
                            <hr></hr>
                            {this.props.game.review}
                        </blockquote>
                    </Card.Body>
                   <Button onClick={this.DeleteGame}>Delete</Button>
                </Card>
            </div>
        );
    }
}