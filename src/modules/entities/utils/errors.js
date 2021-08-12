const ErrorUIMessages = {
  code: {
    TOPIC_URL_SLUG_CONFLICT: {
      id: "error.api.topic.urlSlugConflict",
    },
  },
  status: {
    403: {
      id: "error.api.status.403",
    },
  },
  fallback: {
    id: "error.api.general",
  },
};

function getApiErrorData(error) {
  return error.isAntonioError ? error.data : error.response?.data;
}

function isApiError(error) {
  return error.isAntonioError || Boolean(getApiErrorData(error));
}

/**
 * @param {import('@ackee/antonio-core').AntonioError} error
 * @returns {{ status: number; code: string; }}
 */
function parseError(error) {
  if (error.isAntonioError) {
    return {
      status: error.response.status,
      code: error.data?.errorCode,
    };
  }

  const errorData = getApiErrorData(error);
  const { status } = errorData;
  // [Jakub Baierl] Second one for the google errors | duplicate entry email
  const code =
    errorData.errorCode || errorData.code || Object.keys(errorData)?.[0];
  return {
    status,
    code,
  };
}

function findErrorMessage({ status, code }, errorUIMessages = {}) {
  if (errorUIMessages.code?.[code]) {
    return errorUIMessages.code[code];
  }
  if (errorUIMessages.status?.[status]) {
    return errorUIMessages.status[status];
  }
  return null;
}

// 1. If `error` isn't `ApiError`, return fallback message.
// 2. Parse `error`, extract `code` and `status`
// 3. Find with the `code` or `status` custom error message in `errorMessages` object.
// 4. If no custom message has been found, try to find default error message in `ErrorUIMessage` (placed in `../config` file)
// 5. If no default error message has been found, return fallback message.
export function createUIErrorMessage(error, errorUIMessages = {}) {
  if (!isApiError(error)) {
    return errorUIMessages.fallback || ErrorUIMessages.fallback;
  }

  const errorKeys = parseError(error);
  const errorMessage =
    findErrorMessage(errorKeys, errorUIMessages) ||
    findErrorMessage(errorKeys, ErrorUIMessages);

  errorUIMessages.fallback = {
    ...errorUIMessages.fallback,
    errorDetails: getApiErrorDetails(error),
  };

  return errorMessage || errorUIMessages.fallback || ErrorUIMessages.fallback;
}

/**
 * @param {import('@ackee/antonio-core').AntonioError | unknown} error
 * @returns {number | null}
 */
export function getApiErrorDetails(error) {
  if (!isApiError(error)) {
    return null;
  }

  const errorData = getApiErrorData(error);

  return errorData?.errorData?.error?.details;
}

/**
 * @param {import('@ackee/antonio-core').AntonioError | unknown} error
 * @returns {string | null}
 */
export function getApiErrorCode(error) {
  if (!isApiError(error)) {
    return null;
  }

  return parseError(error).code;
}
