import {
	FETCH_MESSAGES_CANCEL,
	FETCH_MESSAGES_FAILURE,
	FETCH_MESSAGES_REQUEST,
	FETCH_MESSAGES_RESET,
	FETCH_MESSAGES_SUCCESS,
} from "./types";

const fetchMessagesRequest = (params) => ({
	type: FETCH_MESSAGES_REQUEST,
	payload: { ...params },
});

const fetchMessagesSuccess = (payload, meta) => ({
	type: FETCH_MESSAGES_SUCCESS,
	meta,
	payload,
});

const fetchMessagesFailure = (error) => ({
	type: FETCH_MESSAGES_FAILURE,
	error,
});

const fetchMessagesCancel = () => ({
	types: FETCH_MESSAGES_CANCEL,
});

const fetchMessagesReset = () => ({
	type: FETCH_MESSAGES_RESET,
});

export default {
	fetchMessagesRequest,
	fetchMessagesSuccess,
	fetchMessagesFailure,
	fetchMessagesCancel,
	fetchMessagesReset,
};
