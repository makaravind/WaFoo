import React from 'react';
import styled from 'styled-components';
import {Colors} from '../index.constants';
import {calculateWaterPercentageAchieved} from '../global/utilities';

import Title from '../components/water/Title';
import Controller from '../components/water/Controller';

const Layout = styled.div`
    display: grid;
    background: linear-gradient(to top, ${Colors.DARK_PRIMARY_WATER} ${props => props.percentage()}px, ${Colors.PRIMARY_WATER} 20px); 
    grid-template-columns: 4fr 1fr;
    align-content: center;
    justify-items: center;
`;

function Water({glasses, onAdd, onRemove}) {
    return (
        <Layout percentage={() => calculateWaterPercentageAchieved(glasses)}>
            <Controller onAdd={onAdd} onRemove={onRemove}/>
            <Title glasses={glasses}/>
        </Layout>
    )
}

export default Water
