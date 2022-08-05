import React from 'react';
import { useHistory } from 'react-router-dom';

import useReport from '../../hooks/useReport';
import CardDetail from '../CardDetail';

const Report = () => {
    const history = useHistory();
    const redirect = () => {
        history.push('/');
    };

    const message = useReport();
    return <CardDetail message={message} visible onCancel={redirect} />;
};

export default Report;
