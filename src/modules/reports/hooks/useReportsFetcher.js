import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/reports';
import React from 'react';

export default function useFetchReports(defaultParams) {
    const dispatch = useDispatch();

    const { cancelled, error, inProgress, lastSuccessAt, success } = useSelector(state =>
        selectors.getReportsApiSelector(state),
    );

    const resetReports = React.useCallback(() => {
        dispatch(actions.fetchReportsReset());
        // eslint-disable-next-line
    }, []);

    // TODO: remove this
    const fetchReports = React.useCallback(
        customParams => {
            const params = { ...defaultParams, ...customParams };
            if (!inProgress) {
                dispatch(actions.fetchReportsRequest(params));
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }
        },
        // eslint-disable-next-line
        [inProgress],
    );
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
