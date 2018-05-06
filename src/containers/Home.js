import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';
import Layout from '../global/Layout';
import Water from './Water';
import Calorie from './Calorie';
import NavBar from '../components/NavBar';
import Logs from './Logs';
import {action, Colors, Options, type} from "../index.constants";

class Home extends Component {
    state = {
        glasses: 0,
        calories: 0,
        logs: [],
        error: '',
        navBarOptionSelected: Options.NOT_SELECTED
    };

    performSelectedNavBarAction = () => {
        console.log('action selected by user ', this.state.navBarOptionSelected);
        switch(this.state.navBarOptionSelected) {
            case Options.SHOW_LOGS:
                this.setState(() => ({
                    showLogs: true,
                    error: ''
                }));
                break;
            default:
                this.setState({error: 'Not sure want to do with that!'});

        }
    };

    handleNavBarOptionChanged = (event, value) => this.setState(
        () => ({navBarOptionSelected: value}),
        this.performSelectedNavBarAction);

    handleOnWaterGlassesIncrement = () => {
        console.log('incrementing number of glasses drank');
        this.setState((currentState) => ({
            glasses: currentState.glasses + 1, error: ''
        }));
        this.logAction({type: type.WATER, action: action.INCREMENT, by: 1});
    };

    handleOnWaterGlassesDecrement = () => {
        console.log('decrementing number of glasses drank');
        this.setState((currentState) => {
            let newState = {};
            currentState.glasses > 0 ?
                newState = {glasses: currentState.glasses - 1, error: ''} :
                newState = {error: 'Please, Do not dehydrate!'};
            return newState;
        });
        this.logAction({type: type.WATER, action: action.DECREMENT, by: 1});
    };

    handleOnCalorieInTake = (calories) => {
        console.log('calorie in take ', calories);
        {
            calories >= 0 &&
            this.setState((currentstate) => ({
                calories: currentstate.calories + calories,
                error: ''
            }));
        }
        this.logAction({type: type.CALORIE, action: action.INCREMENT, by: calories});
    };

    handleOnCalorieBurnt = (calories) => {
        console.log('calories burnt ', calories);
        this.setState((currentstate) => {
            let newState = {};
            currentstate.calories > 0 ?
                newState = {calories: currentstate.calories - calories, error: ''} :
                newState = {error: 'hey c\'on, do not burn more than you eat'};
            return newState;
        });
        this.logAction({type: type.CALORIE, action: action.DECREMENT, by: calories});
    };

    logAction = (log) => {
        const _log = {...log, timestamp: Date.now()};
        this.setState((currentState) => {
            return {logs: [...currentState.logs, _log]}
        });
    };

    handleCloseShowLogs = () => {
      this.setState({navBarOptionSelected: Options.NOT_SELECTED});
    };

    doShowLogs = () => {
        return this.state.navBarOptionSelected === Options.SHOW_LOGS;
    };

    render() {
        return (
            <Layout>
                <Snackbar
                    open={this.state.error}
                    message={this.state.error}
                    autoHideDuration={4000}
                    style={{backgroundColor: Colors.PRIMARY}}
                />
                {this.doShowLogs() && <Logs logs={this.state.logs} onClose={this.handleCloseShowLogs} open={this.doShowLogs}/>}
                <NavBar value={this.state.navBarOptionSelected} onOptionSelected={this.handleNavBarOptionChanged}/>
                <Water
                    glasses={this.state.glasses}
                    onAdd={this.handleOnWaterGlassesIncrement}
                    onRemove={this.handleOnWaterGlassesDecrement}
                />
                <Calorie
                    calories={this.state.calories}
                    onGained={this.handleOnCalorieInTake}
                    onBurn={this.handleOnCalorieBurnt}
                />
            </Layout>
        )
    }
}

export default Home