import { all } from 'redux-saga/effects';
import fetchReports from './fetchReports';

export default function* messages() {
    yield all([fetchReports()]);
}
