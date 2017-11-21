import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './projects.css';

class Projects extends Component {

    render() {
        return (
            <div className="reference">
              <p className="headline">Check out some of my projects</p>
                <Card className="card">
                  <CardHeader
                    subtitle="Using Nagios Dashlet"
                    title="Video Monitoring with Raspberry PI 3"
                    avatar="pi.jpg"
                  />
                <CardText>
                        With one easy script and $5 camera from ebay, it is possible to turn Raspberry PI into live streaming security camera.
                        It can even send alerts when something moves.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Read More" href="https://blog.miguelgrinberg.com/post/stream-video-from-the-raspberry-pi-camera-to-web-browsers-even-on-ios-and-android" target="_blank"/>
                    </CardActions>
                </Card>
                <Card className="card">
                  <CardHeader
                    subtitle="Test showcase"
                    title="Node JS website"
                    avatar="node.png"
                  />
                <CardText>
                        Node website with sign in and sign out feature. Ability make posts. Ability to create users. Used Router with Express.<br /> In fact, this is my first website with Node so please don't judge. 
                    </CardText>
                    <CardActions>
                         <FlatButton label="View live" href="http://pure-shelf-76543.herokuapp.com/blog" target="_blank"/>
                    </CardActions>
                </Card>
                <Card className="card">
                  <CardHeader
                    subtitle="Using Nagios Dashlet"
                    title="Weather checker"
                    avatar="weather.png"
                  />
                <CardText>
                        Monitoring weather with PHP plugin and AJAX requests.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Read More" href="https://exchange.nagios.org/directory/Addons/Dashlets/Weather-checking-dashlet/details" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Projects;
