import React from 'react';
import axios from 'axios';

export class CreateReview extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Genre: '',
            Cover: '',
            Review: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangeGenre(e) {
        this.setState({
            Genre: e.target.value
        });
    }

    onChangeCover(e) {
        this.setState({
            Cover: e.target.value
        });
    }

    onChangeReview(e) {
        this.setState({
            Review: e.target.value
        });
    }

    //Prevent from calling button multiple times
    onSubmit(e) {
        e.preventDefault();
        alert('Game: ' + this.state.Title + ' ' + this.state.Year + ' ' + this.state.Genre + ' ' + this.state.Cover + ' ' + this.state.Review);
    
        const newGame = {
            title: this.state.Title,
            year: this.state.Year,
            genre: this.state.Genre,
            cover: this.state.Cover,
            review: this.state.Review
        }
        axios.post('http://localhost:4000/api/games',newGame)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Game Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Add Game Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Add Game Genre: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Genre}
                            onChange={this.onChangeGenre}>
                        </input>
                    </div>
                    <div>
                        <label>Game Cover: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Cover}
                            onChange={this.onChangeCover}>
                        </textarea>
                    </div>
                    <div>
                        <label>Game Review: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Review}
                            onChange={this.onChangeReview}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Add Game'
                            className='btn btn-primary'>
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}