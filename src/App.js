import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Breadcrumbs />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
