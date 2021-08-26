import { ApiTypes } from 'constants/entities';

import { combineReducers } from 'redux';

import remove from './delete';
import put from './put';
import get from './get';

export default combineReducers({
    [ApiTypes.DELETE]: remove,
    [ApiTypes.PUT]: put,
    [ApiTypes.GET]: get,
});
