import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from 'modules/ui';
import useLogout from '../../hooks/useLogout';

const Logout = () => {
    const { signOut, api } = useLogout();
    return (
        <Button type="primary" onClick={signOut} loading={api.inProgress}>
            <FormattedMessage id="button.logout" />
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter colorInterpolationFilters="auto" id="a">
                        <feColorMatrix
                            in="SourceGraphic"
                            values="0 0 0 0 1.000000 0 0 0 0 0.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                        />
                    </filter>
                </defs>
                <g
                    transform="translate(-2 -2)"
                    filter="url(#a)"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <g stroke="#000" strokeWidth="1.3">
                        <path d="M7.667 17H4.556C3.696 17 3 16.304 3 15.444V4.556C3 3.696 3.696 3 4.556 3h3.11M12.111 13.889L16 10l-3.889-3.889M16 10H6.667" />
                    </g>
                </g>
            </svg>
        </Button>
    );
};

export default Logout;
