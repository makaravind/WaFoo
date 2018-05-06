import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import {APP_TITLE, Colors} from '../index.constants';

class NavBar extends Component {
    render() {
        return (
            <AppBar
                style={{"gridColumn": "1/-1", backgroundColor: Colors.PRIMARY}}
                title={<span>{APP_TITLE}</span>}
                // onTitleClick={handleClick}
                iconElementRight={<IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                    value={this.props.value} onChange={this.props.onOptionSelected}>
                    <MenuItem value={1} primaryText="Show Logs"/>
                </IconMenu>}
            />
        );
    }
}

export default NavBar
