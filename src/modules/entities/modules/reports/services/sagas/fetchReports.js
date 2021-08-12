import { put } from 'redux-saga/effects';
import { takeLatestRequest } from '@ackee/antonio-utils';
// eslint-disable-next-line no-unused-vars
import { firestore } from 'config/firebase';
import * as log from 'config/loglevel';
import { createUIErrorMessage } from '../../../../utils/errors';
import { fetchReports as actions, fetchReportsTypes } from '../actions';

const mockData = [
    {
        appName: 'FlashNews DevApi B 2690',
        appVersion: '0.20.1',
        buildNumber: 2690,
        bundleId: 'com.flashnews.livesportnews.devapi.beta',
        customData: [],
        date: {
            nanoseconds: 909100000,
            seconds: 1604401761,
        },
        deviceMake: 'samsung',
        deviceModel: 'SM-A405FN',
        mediaUploaded: false,
        osVersion: '10 (api 29)',
        platform: 'android',
    },
    {
        appName: 'FlashNews',
        appVersion: '0.17.0',
        buildNumber: '2111',
        bundleId: 'cz.ackee.flash-news.development.beta',
        date: {
            nanoseconds: 909000000,
            seconds: 1604501761,
        },
        deviceMake: 'Apple',
        deviceModel: 'iPhone8,4 (iPhone SE)',
        mediaUploaded: false,
        note: '',
        osVersion: '12.3.1',
        platform: 'ios',
        scheme: 'ass-flash-news',
        type: 'image',
    },
];

function* fetchReports() {
    try {
        // TODO: Use limit and startAt and endAt for pagination - DONT DELETE THE LIMIT - it causes exceeding firestore plan and ban for 1 day
        // TODO: uncomment when quota it not exceeded anymore

        // const collectionRef = yield firestore.collection("messages").limit(25);
        // const data = yield collectionRef.get().then((querySnapshot) => {
        //   querySnapshot.forEach((documentSnapshot) => {
        //     return documentSnapshot.data();
        //   });
        // });
        // TODO: delete when quota it not exceeded anymore
        const data = mockData;

        yield put(actions.fetchReportsSuccess(data));
    } catch (error) {
        log.error(error);

        const uiError = createUIErrorMessage(error);
        yield put(actions.fetchReportsFailure(uiError));
    }
}

// eslint-disable-next-line
export default function* () {
    yield takeLatestRequest(
        {
            REQUEST: fetchReportsTypes.FETCH_REPORTS_REQUEST,
            cancelTask: actions.fetchReportsCancel,
        },
        fetchReports,
    );
}
