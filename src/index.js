import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './containers/Home';

const App = () => {
    return (<MuiThemeProvider>
        <Home/>
    </MuiThemeProvider>)
};

ReactDOM.render(<App/>, document.getElementById('root'));
