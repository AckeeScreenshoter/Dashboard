import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/reports';
import React from 'react';

export default function useFetchReports(id) {
    const dispatch = useDispatch();
    const { cancelled, error, inProgress, lastSuccessAt, success } = useSelector(state =>
        selectors.fetchReportApiSelector(state),
    );

    const resetReport = () => {
        dispatch(actions.fetchReportReset());
    };

    const fetchReport = () => {
        if (!inProgress) {
            dispatch(actions.fetchReportRequest(id));
        }
    };
    React.useEffect(() => {
        fetchReport();
        return resetReport;
        // eslint-disable-next-line
    }, []);

    return {
        cancelled,
        error,
        success,
        inProgress,
        lastSuccessAt,
    };
}
