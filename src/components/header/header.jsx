import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Animation from '../animation/animation';
const scrollTo = require('scroll-to');
import './header.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-quint',
            duration: 1500
        });
    }

    render() {
        return (
          <div className="wrapper" style={{"height": this.state.height}}>
            <Animation></Animation>
            <div className="header">
                <h3>Nikita Polovenko</h3>
                <h6>software developer</h6>
            </div>
            <div className="scroll-down">
              <FloatingActionButton mini={true} backgroundColor="#A80202" onClick={this.onScrollToIntro.bind(this)}>
                <ArrowIcon />
              </FloatingActionButton>
            </div>

          </div>
        );
    }
}

export default HeaderComponent;
