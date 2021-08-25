import React from 'react';
import ReportDetail from '../ReportDetail';
import ReportFetcher from '../ReportFetcher';

const Report = () => (
    <ReportFetcher>
        <ReportDetail />
    </ReportFetcher>
);

export default Report;
