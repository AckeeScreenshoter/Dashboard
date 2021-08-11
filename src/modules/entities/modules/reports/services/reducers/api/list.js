const fetchMessagesRequest = () => ({
    type: 'FETCH_MESSAGES_REQUEST',
});

const fetchMessagesSuccess = todos => ({
    type: 'FETCH_MESSAGES_SUCCESS',
    payload: todos,
});

const fetchMessagesFailure = error => ({
    type: 'FETCH_MESSAGES_FAILURE',
    error,
});

const fetchMessagesCancel = error => ({
    type: 'FETCH_MESSAGES_CANCEL',
    error,
});

export default {
    fetchMessagesRequest,
    fetchMessagesSuccess,
    fetchMessagesFailure,
    fetchMessagesCancel,
};
