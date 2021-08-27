import React from 'react';
import { childrenPropType } from '@ackee/lucas';

import { useFetchReports } from 'modules/reports';
import { useReports } from 'modules/reports';

const ReportsFetcher = ({ children }) => {
    const { success } = useFetchReports();
    const { data } = useReports();

    return data.length === 0 && success ? <h1>Nic jsme nenašli</h1> : children;
};

ReportsFetcher.propTypes = {
    children: childrenPropType.isRequired,
};

export default ReportsFetcher;
