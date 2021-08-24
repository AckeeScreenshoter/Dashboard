import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/reports';
import React from 'react';

export default function useFetchReports(defaultParams) {
    const dispatch = useDispatch();

    const { cancelled, error, inProgress, lastSuccessAt, success } = useSelector(state =>
        selectors.getReportsApiSelector(state),
    );

    const resetReports = () => {
        dispatch(actions.fetchReportsReset());
    };

    const fetchReports = customParams => {
        const params = { ...defaultParams, ...customParams };
        if (!inProgress) {
            dispatch(actions.fetchReportsRequest(params));
        }
    };
    React.useEffect(() => {
        fetchReports();
        return resetReports;

        // eslint-disable-next-line
    }, []);

    return {
        fetchReports,
        cancelled,
        error,
        success,
        inProgress,
        lastSuccessAt,
    };
}
