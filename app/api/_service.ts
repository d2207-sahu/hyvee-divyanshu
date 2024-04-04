interface Headers {
    [key: string]: string;
}

const headers: Headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

/**
 * @function
 * @param {string} requestType - The type of HTTP request (e.g., "GET", "POST", "DELETE").
 * @param {string} url - The URL endpoint for the API request.
 * @param {object} body - Payload to be included in request body (only for POST requests).
 * @description This function makes API requests using Axios.
 * @throws {Error} If an unsupported request type is provided.
 */
async function apiService(requestType: string, url: string, body: any | {}) {
    if (requestType === 'POST') {
        headers['Content-Type'] = 'application/json';
    }

    if (requestType === 'GET' || requestType === 'DELETE') {
        if ('Content-Type' in headers) {
            delete headers['Content-Type'];
        }
        delete headers['Content-Type'];
    }

    const fetchOptions: RequestInit = {
        method: requestType,
        headers,
        mode: 'cors'
    };
    const baseUrl: string = process.env.BASE_API_URL ?? "https://api.";


    if (body && requestType !== 'GET') {
        fetchOptions.body = JSON.stringify(body);
    }
    console.log(baseUrl + url)
    const response = await fetch(baseUrl + url, fetchOptions);

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    } else {
        const errorData = await response.json();
        return errorData;
    }
}

/**
 * @function
 * @param {string} url - The URL on which error occurred.
 * @param {object} error - The error response received from the server.
 * @param {function} errorCallback - Callback fxn to handle failed API requests.
 * @description
 *   This function is responsible for handling errors
 */
const errorHandler = (error: any, errorCallback: Function, url?: string,) => {
    let errorMessage = error.message || error;
    return errorCallback(errorMessage);
};

export { apiService, errorHandler }