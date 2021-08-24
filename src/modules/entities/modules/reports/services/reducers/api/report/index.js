import { ApiTypes } from 'constants/entities';

import { combineReducers } from 'redux';

import get from './get';
import remove from './delete';
import put from './put';

export default combineReducers({
    [ApiTypes.DELETE]: remove,
    [ApiTypes.GET]: get,
    [ApiTypes.PUT]: put,
});
