import { combineReducers } from 'redux';
import { EntityKey } from '../../../../constants';
import { apiReducer as reports } from '../../modules/reports';

export default combineReducers({
    [EntityKey.REPORTS]: reports,
});
