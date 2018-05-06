import React, {Component} from 'react';
import styled from 'styled-components';
import Title from '../components/calorie/Title';
import {Colors} from '../index.constants';
import Controller from '../components/calorie/Controller';

const Layout = styled.div`
    display: grid;
    background: ${Colors.PRIMARY_CALORIE}; 
    grid-template-columns: 1fr 4fr;
    align-content: center;
    justify-items: center;
`;


class Calorie extends Component {
    state = {
        input: 0
    };

    handleCalorieInput = (e) => {
        const value = e.target.value;
        console.log('handling calorie input from user', value);
        this.setState({input: +value});
    };

    render() {
        return (
            <Layout>
                <Title calories={this.props.calories}/>
                <Controller onGained={this.props.onGained} onBurn={this.props.onBurn} input={this.state.input}
                            handleCalorieInput={this.handleCalorieInput}/>
            </Layout>
        )
    }
}

export default Calorie