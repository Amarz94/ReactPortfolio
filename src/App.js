import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faReact, faJsSquare, faHtml5, faCss3} from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faFile, faFileDownload } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faReact, faJsSquare, faHtml5, faCss3, faCoffee, faFile, faFileDownload)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;