import { ApiTypes } from 'constants/entities';

import { combineReducers } from 'redux';

import get from './get';
import remove from './delete';

export default combineReducers({
    [ApiTypes.GET]: get,
    [ApiTypes.DELETE]: remove,
});
