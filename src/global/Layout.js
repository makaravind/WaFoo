import React from 'react';
import styled from 'styled-components';

const PerfectSplitLayout = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 70px auto;
    font-family: 'Lobster', cursive;
    
    @media (max-width: 50em) {
        grid-template-columns: 1fr;
    }
`;


function Layout({children}) {
    return (
        <PerfectSplitLayout>
            {children}
        </PerfectSplitLayout>
    )
}

export default Layout