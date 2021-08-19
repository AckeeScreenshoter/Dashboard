import React from 'react';
import { childrenPropType } from '@ackee/lucas';
import useFetchFilters from '../../hooks/useFetchFilters';
const FilterFetcher = ({ children }) => {
    const { success, inProgress } = useFetchFilters();

    return <>{inProgress || !success ? null : children}</>;
};

FilterFetcher.propTypes = {
    children: childrenPropType.isRequired,
};

export default FilterFetcher;
