import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionCode from 'material-ui/svg-icons/action/code';
import './about.css';


class About extends Component {

    render() {
        return (
          <div className="about">
            <p className="headline">About me</p>
            <p className="text-justify">
              Hello! 

              I'm an aspiring software developer and technology entrepreneur. Below you can find some of the amazing technologies i'm most interested in. Make sure to add me on LinkedIn and Facebook! 

            </p>

              <div className="checkbox">
                <Checkbox
                  checkedIcon={<ActionCode />}
                  uncheckedIcon={<ActionCode />}
                  iconStyle={{"fill":"#A80202"}}
                  label="React JS - It's the future!"
                />
              </div>
              <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionCode />}
                uncheckedIcon={<ActionCode />}
                iconStyle={{"fill":"#A80202"}}
                label="Node JS"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionCode />}
                uncheckedIcon={<ActionCode />}
                iconStyle={{"fill":"#A80202"}}
                label="PHP"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionCode />}
                uncheckedIcon={<ActionCode />}
                iconStyle={{"fill":"#A80202"}}
                label="Mongo&MySQL"
              />
          </div>
          <div className="design-checkbox">
            <Checkbox
              checkedIcon={<ActionCode />}
              uncheckedIcon={<ActionCode />}
              iconStyle={{"fill":"#A80202"}}
              label="Linux Support"
            />
        </div>
        <br />
        <br />
        <br />
        <p>Feel free to email me at polovenko.nikita@gmail.com</p>
          </div>
        );
    }
}

export default About;
