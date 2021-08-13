import React from 'react';
import { FelaComponent } from 'react-fela';
import { FormattedMessage } from 'react-intl';

import * as styles from './ErrorMessage.styles';

const ErrorMessage = () => (
    <FelaComponent style={styles.message}>
        <FormattedMessage id="error.general" />
    </FelaComponent>
);

export default ErrorMessage;
