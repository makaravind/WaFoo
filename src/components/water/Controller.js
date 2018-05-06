import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import {Colors} from '../../index.constants';

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

const AddBtn = styled(RaisedButton)`
    margin: auto;
`;

const DeBtn = styled(RaisedButton)`
    margin: auto;
`;

function Controller({onAdd, onRemove}) {
    return (
        <Layout>
            <AddBtn
                backgroundColor={Colors.ACCENT}
                icon={<NavigationArrowUpward color={fullWhite}/>}
                onClick={onAdd}
            />
            <DeBtn
                backgroundColor={Colors.ACCENT}
                icon={<NavigationArrowDownward color={fullWhite}/>}
                onClick={onRemove}
            />
        </Layout>
    )
}

export default Controller