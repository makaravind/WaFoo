import React, {Component} from 'react';

import {StyledWrapper} from '../styled_components/Wrapper';

// import { StyledWater} from '../styled_components/Water'
import Water from './Water';
import Calorie from './Calorie';


class Home extends Component {

    CONST_TYPE_WATER = 'water';
    CONST_TYPE_CALORIE = 'calorie';
    CONST_ACTION_DECREMENT = 'decrement';
    CONST_ACTION_INCREMENT = 'increment';

    state = {
        glasses: 0,
        calories: 0,
        logs: [],
        error: '',
    };

    handleOnWaterGlassesIncrement = () => {
        console.log('incrementing number of glasses drank');
        this.setState((currentState) => ({
            glasses: currentState.glasses + 1, error: ''
        }));
        this.logAction({type: this.CONST_TYPE_WATER, action: this.CONST_ACTION_INCREMENT, by: 1});
    };

    handleOnWaterGlassesDecrement = () => {
        console.log('decrementing number of glasses drank');
        this.setState((currentState) => {
            let newState = {};
            currentState.glasses > 0 ?
                newState = {glasses: currentState.glasses - 1, error: ''} :
                newState = {error: 'You cannot dehydrate!'};
            return newState;
        });
        this.logAction({type: this.CONST_TYPE_WATER, action: this.CONST_ACTION_DECREMENT, by: 1});
    };

    handleOnCalorieInTake = (calories) => {
        console.log('calorie in take ', calories);
        this.setState((currentstate) => ({
            calories: currentstate.calories + calories,
            error: ''
        }));
        this.logAction({type: this.CONST_TYPE_CALORIE, action: this.CONST_ACTION_INCREMENT, by: calories});
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
        this.logAction({type: this.CONST_TYPE_CALORIE, action: this.CONST_ACTION_DECREMENT, by: calories});
    };

    logAction = (log) => {
        this.setState((currentState) => {
            return {...currentState, log}
        });
    };

    render() {
        return (
            <div>
                {this.state.error}
                <StyledWrapper>
                    <Water
                        glasses={this.state.glasses}
                        onAdd={this.handleOnWaterGlassesIncrement}
                        onRemove={this.handleOnWaterGlassesDecrement}
                    />
                </StyledWrapper>

                <StyledWrapper>
                    <Calorie
                        calories={this.state.calories}
                        onGained={this.handleOnCalorieInTake}
                        onBurn={this.handleOnCalorieBurnt}
                    />
                </StyledWrapper>
            </div>
        )
    }
}

export default Home