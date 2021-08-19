import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/reports';
import React from 'react';

export default function useFetchReports() {
    const { cancelled, error, inProgress, lastSuccessAt, success } = useSelector(state =>
        selectors.getReportsApiSelector(state),
    );

    const dispatch = useDispatch();

    const resetReports = React.useCallback(() => {
        dispatch(actions.fetchReportsReset());

        // eslint-disable-next-line
    }, []);

    const fetchReports = React.useCallback(() => {
        if (!inProgress) {
            dispatch(actions.fetchReportsRequest());
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
