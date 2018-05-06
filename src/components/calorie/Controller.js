import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Colors} from '../../index.constants';
import {fullWhite} from 'material-ui/styles/colors';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 
`;

const AddBtn = styled(RaisedButton)`
    margin: auto;
`;

const DeBtn = styled(RaisedButton)`
    margin: auto;
`;

const calorieInputStyle = {
    floatingLabelStyle: {
        color: fullWhite,
    },
    floatingLabelFocusStyle: {
        color: Colors.ACCENT,
    },
    underlineStyle: {
        borderColor: fullWhite,
    },
    underlineFocusStyle: {
        borderColor: Colors.ACCENT,
    },
    color: fullWhite
};

function Controller(props) {
    return (
        <Layout>
            <AddBtn
                backgroundColor={Colors.ACCENT}
                icon={<NavigationArrowUpward color={fullWhite}/>}
                onClick={() => props.onGained(props.input)}
            />
            <TextField type="number"
                       floatingLabelText="Gain/Burn Calories"
                       floatingLabelStyle={calorieInputStyle.floatingLabelStyle}
                       value={props.input}
                       underlineStyle={calorieInputStyle.underlineStyle}
                       underlineFocusStyle={calorieInputStyle.underlineFocusStyle}
                       onChange={(e) => props.handleCalorieInput(e)}
            />
            <DeBtn
                backgroundColor={Colors.ACCENT}
                icon={<NavigationArrowDownward color={fullWhite}/>}
                onClick={() => props.onBurn(props.input)}
            />
        </Layout>
    )
}

export default Controller