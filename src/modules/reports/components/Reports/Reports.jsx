import React from 'react';
import { ReportsFetcher, ReportsList } from 'modules/reports';
const Reports = () => (
    <ReportsFetcher>
        <ReportsList />
    </ReportsFetcher>
);

export default Reports;
