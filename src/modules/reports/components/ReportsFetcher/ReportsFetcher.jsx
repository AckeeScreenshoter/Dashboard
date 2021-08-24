import React from 'react';
import { childrenPropType } from '@ackee/lucas';

import { Loader } from 'modules/ui';
import { useReportsFetcher } from 'modules/reports';

const ReportsFetcher = ({ children }) => {
    const defaultParams = {
        appName: 'All',
        deviceModel: 'All',
        platform: 'All',
    };
    const { success, inProgress } = useReportsFetcher(defaultParams);

    return <Loader show={inProgress || !success}>{children}</Loader>;
};

ReportsFetcher.propTypes = {
    children: childrenPropType.isRequired,
};

export default ReportsFetcher;
