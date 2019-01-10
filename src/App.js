import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container
        style={{
          fontFamily:
            'source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace'
        }}>
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}

export default App;
