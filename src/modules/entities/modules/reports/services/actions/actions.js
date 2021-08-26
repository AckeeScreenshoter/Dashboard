import * as fetchReports from './fetchReports';
import deleteReport from './deleteReport';
import * as addNote from './addNote';
import fetchReport from './fetchReport';

export default {
    ...fetchReports,
    ...deleteReport,
    ...addNote,
    ...fetchReport,
};
