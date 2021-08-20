import React from 'react';
import { childrenPropType } from '@ackee/lucas';
import useFetchFilters from '../../hooks/useFetchFilters';
import { Loader } from 'modules/ui';

const FilterFetcher = ({ children }) => {
    const { success, inProgress } = useFetchFilters();

    return (
        <Loader show={inProgress || !success} inline={true}>
            {children}
        </Loader>
    );
};

FilterFetcher.propTypes = {
    children: childrenPropType.isRequired,
};

export default FilterFetcher;
