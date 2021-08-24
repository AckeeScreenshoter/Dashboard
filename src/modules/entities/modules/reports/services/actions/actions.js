import * as fetchReports from './fetchReports';
import deleteReport from './deleteReport';
import addNote from './addNote';

export default {
    ...fetchReports,
    ...deleteReport,
    ...addNote,
};
