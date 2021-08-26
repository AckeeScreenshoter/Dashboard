import React from 'react';
import { childrenPropType } from '@ackee/lucas';

import { Loader } from 'modules/ui';
import { useFetchReports } from 'modules/reports';

const ReportsFetcher = ({ children }) => {
    // React.useEffect(() => {
    //     fetchReports();
    //     // eslint-disable-next-line
    // }, []);

    return children;
};

ReportsFetcher.propTypes = {
    children: childrenPropType.isRequired,
};

export default ReportsFetcher;
