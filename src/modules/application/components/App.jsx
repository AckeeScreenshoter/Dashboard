import { Container } from 'modules/ui';
import React from 'react';
import Header from './Header';
import Firewall from './Firewall';

const App = () => {
    return (
        <Container>
            <Header />
            <Firewall />
        </Container>
    );
};

export default App;
