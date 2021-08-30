import React from 'react';
import ReactDOM from 'react-dom';
import App from 'modules/application';
import Core from 'modules/core';
import './styles/general.less';

ReactDOM.render(
    <Core>
        <App />
    </Core>,
    document.getElementById('root'),
);
