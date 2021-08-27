import React from 'react';
import { childrenPropType } from '@ackee/lucas';
import { useParams } from 'react-router-dom';
import { Loader } from 'modules/ui';
import { useReportFetcher } from 'modules/reports';

const ReportFetcher = ({ children }) => {
    const { id } = useParams();

    const { inProgress } = useReportFetcher(id);
    return <Loader show={inProgress}>{children}</Loader>;
};

ReportFetcher.propTypes = {
    children: childrenPropType.isRequired,
};

export default ReportFetcher;
