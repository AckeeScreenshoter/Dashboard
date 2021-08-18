import { all } from 'redux-saga/effects';
import fetchFilters from './fetchFilters';

export default function* filters() {
    yield all([fetchFilters()]);
}
