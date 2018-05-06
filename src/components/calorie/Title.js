import React from 'react';
import styled from 'styled-components';
import {settings} from '../../index.constants';

const Layout = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1em;
    align-items: center;
    justify-items: center;
    margin: 20px;
`;

const Count = styled.h1`
    font-size: 8em;
    grid-row: 1/-1;
    color: rgba(255,251,255,1);
`;

const Metric = styled.p`
    font-size: 1em;
    margin-top: auto;
    color: rgba(255,251,255,0.75);
`;

function Title({calories}) {
    return (
        <Layout>
            <Count>{calories} </Count><Metric>calories</Metric>
        </Layout>
    )
}

export default Title