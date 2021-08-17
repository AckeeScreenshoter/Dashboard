import { combineReducers } from 'redux';
import { ApiKeys } from '../../../../constants';
import { apiReducer as reports } from '../../modules/reports';
import { apiReducers as auth } from 'modules/entities/modules/auth';

export default combineReducers({
    ...auth,
    [ApiKeys.REPORTS]: reports,
});
