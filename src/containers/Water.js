import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import styled from 'styled-components';
import {Colors} from '../index.constants';
import {calculateWaterPercentageAchieved} from '../global/utilities';

import Title from '../components/water/Title';

const Layout = styled.div`
    display: grid;
    background: linear-gradient(to top, ${Colors.DARK_PRIMARY_WATER} ${props => props.percentage()}px, ${Colors.PRIMARY_WATER} 20px); 
    grid-template-columns: 1fr 4fr 1fr;
    align-content: center;
    justify-items: center;
`;

const AddBtn = styled(RaisedButton)`
    margin: auto;
`;

const DeBtn = styled(RaisedButton)`
    margin: auto;
`;

function Water({glasses, onAdd, onRemove}) {
    return (
        <Layout percentage={() => calculateWaterPercentageAchieved(glasses)}>
            <AddBtn
                backgroundColor={Colors.ACCENT}
                icon={<NavigationArrowUpward color={fullWhite}/>}
                onClick={onAdd}
                style={{height: "150px"}}
            />
            <Title glasses={glasses}/>
            <DeBtn
                backgroundColor={Colors.ACCENT}
                icon={<NavigationArrowDownward color={fullWhite}/>}
                onClick={onRemove}
                style={{height: "150px"}}
            />
        </Layout>
    )
}

export default Water
