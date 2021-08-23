import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/filters';
import React from 'react';
export default function useFetchFilters() {
    const { cancelled, error, inProgress, lastSuccessAt, success } = useSelector(state =>
        selectors.getFiltersApiSelector(state),
    );

    const dispatch = useDispatch();

    const resetFilters = React.useCallback(() => {
        dispatch(actions.fetchFiltersReset());

        // eslint-disable-next-line
    }, []);

    const fetchFilters = React.useCallback(() => {
        if (!inProgress) {
            dispatch(actions.fetchFiltersRequest());
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        fetchFilters();
        return resetFilters;
        // eslint-disable-next-line
    }, []);

    return {
        fetchFilters,
        cancelled,
        error,
        success,
        inProgress,
        lastSuccessAt,
    };
}
