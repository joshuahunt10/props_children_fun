import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from './BaseLayout'
import Footer from './Footer'
import Header from './Header'
import ParentComponent from './ParentComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout></BaseLayout>
        <Header />
        <ParentComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
