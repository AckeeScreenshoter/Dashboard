import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/reports';

export default function useFetchReports() {
    const dispatch = useDispatch();

    const { cancelled, error, inProgress, lastSuccessAt, success } = useSelector(state =>
        selectors.getReportsApiSelector(state),
    );
    const defaultParams = {
        filters: { appName: 'All', deviceModel: 'All', platform: 'All' },
        lastKey: 0,
        hasNext: true,
    };
    const resetReports = () => {
        dispatch(actions.fetchReportsReset());
    };

    const fetchReports = customParams => {
        const params = { ...defaultParams, ...customParams };
        if (!inProgress) {
            dispatch(actions.fetchReportsRequest(params));
        }
    };

    return {
        resetReports,
        fetchReports,
        cancelled,
        error,
        success,
        inProgress,
        lastSuccessAt,
    };
}
