import PropTypes from 'prop-types';
import { CopyOutlined } from '@ant-design/icons';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { FormattedMessage } from 'react-intl';

import { Button } from 'modules/ui';
import config from 'config/index';

import * as felaRules from './CopyButton.rules';

export const CopyButton = ({ id }) => {
    const { rules } = useFelaEnhanced(felaRules);

    return (
        <Button
            onClick={() => {
                navigator.clipboard.writeText(`${config.appUrl}/s/${id}`);
            }}
            type="primary"
            icon={<CopyOutlined />}
            extend={{ button: rules.copyButton }}
        >
            <FormattedMessage id="card.button.copy" />
        </Button>
    );
};

CopyButton.propTypes = {
    id: PropTypes.string.isRequired,
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
};
