import React from 'react';
import { childrenPropType } from '@ackee/lucas';
import { FormattedMessage } from 'react-intl';

import { useFetchReports } from 'modules/reports';
import { useReports } from 'modules/reports';

const ReportsFetcher = ({ children }) => {
    const { success } = useFetchReports();
    const { data } = useReports();

    return data.length === 0 && success ? (
        <span>
            <FormattedMessage id={'nothing.found'} />
        </span>
    ) : (
        children
    );
};

ReportsFetcher.propTypes = {
    children: childrenPropType.isRequired,
};

export default ReportsFetcher;
