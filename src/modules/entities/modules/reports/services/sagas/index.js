import { all } from 'redux-saga/effects';
import fetchReports from './fetchReports';
import fetchReport from './fetchReport';
import deleteReport from './deleteReport';

import addNote from './addNote';

export default function* reports() {
    yield all([fetchReports(), deleteReport(), addNote(), fetchReport()]);
}
