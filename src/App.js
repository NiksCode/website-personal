import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import Progress from './components/progress/progress';
import Header from './components/header/header';
import Code from './components/code/code';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
 
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
           <Progress></Progress>
          <div className="section headertop">
            <div className="container headerbottom">
              
              <Header></Header>
    
            </div>
          </div>
          <div className="section">
            <div className="container">
              <About></About>
            </div>
          </div>
          <div className="section black">
            <div className="container">
              <Code></Code>
            </div>
          </div>     
         <div className="section background">
            <div className="container">
              <Projects></Projects>
            </div>
          </div>
          <div className="section">
            <div className="container footer">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
