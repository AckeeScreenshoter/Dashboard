import { all } from 'redux-saga/effects';
import fetchReports from './fetchReports';
// import deleteReport from './deleteReport';

export default function* reports() {
    yield all([
        fetchReports(),
        // deleteReport()
    ]);
}
