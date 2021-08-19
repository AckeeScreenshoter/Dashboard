import React from 'react';
import { childrenPropType } from '@ackee/lucas';

import { Loader } from 'modules/ui';
import { useReportsFetcher } from 'modules/reports';

const ReportsFetcher = ({ children }) => {
    const { success, inProgress } = useReportsFetcher();

    return <Loader show={inProgress || !success}>{children}</Loader>;
};

ReportsFetcher.propTypes = {
    children: childrenPropType.isRequired,
};

export default ReportsFetcher;
