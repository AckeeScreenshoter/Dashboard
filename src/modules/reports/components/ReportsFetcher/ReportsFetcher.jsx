import React from 'react';
import { childrenPropType } from '@ackee/lucas';
import useReportsFetcher from '../../hooks/useReportsFetcher';

import Loader from 'modules/ui/components/Loader';

const ReportsFetcher = ({ children }) => {
    const { success, inProgress } = useReportsFetcher();

    return (
        <Loader inline={true} show={inProgress || !success}>
            {children}
        </Loader>
    );
};

ReportsFetcher.propTypes = {
    children: childrenPropType.isRequired,
};

export default ReportsFetcher;
