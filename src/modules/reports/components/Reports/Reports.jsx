import React from 'react';
import { ReportsFetcher, ReportsList } from 'modules/reports';
const Reports = () => (
    <ReportsFetcher>
        <ReportsList />
    </ReportsFetcher>
);

Reports.propTypes = {};

export default Reports;
