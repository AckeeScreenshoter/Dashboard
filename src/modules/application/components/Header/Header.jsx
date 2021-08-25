import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { ReactComponent as Logo } from 'assets/vectors/img_launch_placeholder.svg';
// import { Logout } from 'modules/auth';
import * as felaRules from './Header.styles';
import { FormattedMessage } from 'react-intl';

const Header = () => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <header className={styles.container}>
            <Logo />
            {/* <Logout /> */}
            <div>
                <FormattedMessage id="page.header.madeWithLove" />{' '}
                <a href="https://ackee.cz" target="_blank" rel="noreferrer">
                    Ackee
                </a>
            </div>
        </header>
    );
};

export default Header;
