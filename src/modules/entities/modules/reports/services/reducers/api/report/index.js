import { ApiTypes } from 'constants/entities';

import { combineReducers } from 'redux';

import remove from './delete';
import put from './put';

export default combineReducers({
    [ApiTypes.DELETE]: remove,
    [ApiTypes.PUT]: put,
});
