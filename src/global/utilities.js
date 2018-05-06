import {settings} from '../index.constants';

export const calculateWaterPercentageAchieved = (glasses) => glasses * settings.perGlassVolume / 10;