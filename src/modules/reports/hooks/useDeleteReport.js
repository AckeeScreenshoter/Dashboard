import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/reports';

export default function useDeleteReport(id) {
    const api = useSelector(state => selectors.deleteReportApiSelector(state, id));
    const dispatch = useDispatch();
    const deleteReport = () => dispatch(actions.deleteReport(id));

    return {
        deleteReport,
        api,
    };
}
