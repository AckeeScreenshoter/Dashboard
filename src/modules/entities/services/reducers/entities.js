import { EntityKeys } from 'constants/entities';
import { combineReducers } from 'redux';

import { entityReducer as reports } from 'modules/entities/modules/reports';
import { entityReducer as filters } from 'modules/entities/modules/filters';
import { entityReducer as auth } from 'modules/entities/modules/auth';

export default combineReducers({
    [EntityKeys.REPORTS]: reports,
    [EntityKeys.FILTERS]: filters,
    [EntityKeys.AUTH]: auth,
});
