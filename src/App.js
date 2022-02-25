import React, { Component } from 'react';
import './App.css';
import { Content } from './components/content';
import { Reviews } from './components/reviews';
import { CreateReview } from './components/createReview';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/reviews">Reviews</Nav.Link>
              <Nav.Link href="/createReview">Create Reviews</Nav.Link>
            </Nav>
        </Navbar>

        <br />
        <Routes>
          <Route path='/' element={<Content></Content>} exact/>
          <Route path='/reviews' element={<Reviews></Reviews>} />
          <Route path='/createReview' element={<CreateReview></CreateReview>} />
        </Routes>

      </div>
      </Router>
    );
  }
}


export default App;
