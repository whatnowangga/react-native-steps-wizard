import {
    STEP_INDEX_CHANGED
} from './types';


export const stepIndexChanged = (index) =>{
    return{
        type: STEP_INDEX_CHANGED,
        payload: index
    };
};