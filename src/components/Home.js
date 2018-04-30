import React, {Component} from 'react';

import {StyledWrapper} from '../styled_components/Wrapper';

// import { StyledWater} from '../styled_components/Water'
import Water from './Water';
import Calorie from './Calorie';


class Home extends Component {

    state = {
        glasses: 0,
        calories: 0
    };

    render() {
        return (
            <div>
                <StyledWrapper>
                   <Water/>
                </StyledWrapper>

                <StyledWrapper>
                   <Calorie/>
                </StyledWrapper>
            </div>
        )
    }
}

export default Home