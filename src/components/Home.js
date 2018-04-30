import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Button} from '../styled_components/button';


class Home extends Component {

    render() {
        return (
            <div>
                <Button primary>Normal Button</Button>
                <RaisedButton label="Default"/>
            </div>
        )
    }
}

export default Home