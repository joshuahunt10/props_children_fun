import React, {Component} from 'react';
import '../styles/BaseLayout.css'

import Header from './Header'
import Footer from './Footer'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div className="bars" >
          <Header/>
      </div>
      <div className="body-wrapper">
        {this.props.children}
      </div>
      <div className="bars">
        <Footer/>
      </div>

    </div>
  )
  }
}
