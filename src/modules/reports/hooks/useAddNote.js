import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/reports';

export default function useDeleteReport(id, note) {
    const api = useSelector(state => selectors.addNoteApiSelector(state, note, id));
    const dispatch = useDispatch();

    const addNote = (id, note) => dispatch(actions.addNoteRequest({ id, note }));

    return {
        addNote,
        api,
    };
}
