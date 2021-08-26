import React from 'react';
import { childrenPropType } from '@ackee/lucas';
import { useParams } from 'react-router-dom';
import { Loader } from 'modules/ui';
import { useReportFetcher } from 'modules/reports';

const ReportFetcher = ({ children }) => {
    const { id } = useParams();

    const { success, inProgress, error } = useReportFetcher(id);
    console.log('error' + error);
    return <Loader show={inProgress || !success || !error}>{children}</Loader>;
};

ReportFetcher.propTypes = {
    children: childrenPropType.isRequired,
};

export default ReportFetcher;
