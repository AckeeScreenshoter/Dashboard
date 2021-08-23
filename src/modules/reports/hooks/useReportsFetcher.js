import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/reports';
import React from 'react';

export default function useFetchReports(defaultParams) {
    const { cancelled, error, inProgress, lastSuccessAt, success } = useSelector(state =>
        selectors.getReportsApiSelector(state),
    );
    console.log(inProgress);
    const dispatch = useDispatch();

    const resetReports = React.useCallback(() => {
        dispatch(actions.fetchReportsReset());
        // eslint-disable-next-line
    }, []);

    const fetchReports = React.useCallback(customParams => {
        console.log(inProgress);

        if (!inProgress) {
            const params = { ...defaultParams, ...customParams };
            dispatch(actions.fetchReportsRequest(params));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
