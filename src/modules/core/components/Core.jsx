import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import "firebase/firestore";
// import * as serviceWorker from "serviceWorker";

import { firebaseConfig } from "../modules/firebase";
import { Fela } from "../modules/fela";
import { Redux } from "../modules/redux";
import { Router } from "../modules/router";

import Enhancers from "../containers/Enhancers";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// TODO: Service worker?
// Config.plugins.serviceWorker
//   ? serviceWorker.register()
//   : serviceWorker.unregister();

firebase.initializeApp(firebaseConfig);

function Core({ children }) {
  return (
    <Redux>
      <Fela>
        <Router>
          <Enhancers>{children}</Enhancers>
        </Router>
      </Fela>
    </Redux>
  );
}

Core.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Core;
