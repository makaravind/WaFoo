import {deepPurple900 as primary, blue900, greenA200 as accent, yellow600 as cprimary, blue500 as wprimary} from 'material-ui/styles/colors';

export const APP_TITLE = 'WaFoo...';
export const Colors = {
    PRIMARY: primary,
    PRIMARY_WATER: wprimary,
    DARK_PRIMARY_WATER: blue900,
    ACCENT: accent,
    PRIMARY_CALORIE: cprimary
};
export const settings = {
    perGlassVolume: 250,
    volumePerDay: 1000,
    metric: 'ml'
};
export const type = {
    WATER: 'water',
    CALORIE: 'calorie',
};

export const action = {
    DECREMENT: 'decrement',
    INCREMENT: 'increment'
};

export const Options = {
    NOT_SELECTED : 0,
    SHOW_LOGS: 1
};
