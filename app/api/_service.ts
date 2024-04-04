interface Headers {
    [key: string]: string;
}

const headers: Headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};


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
    const baseUrl: string = process.env.NEXT_BASE_API_URL ?? "https://api.";


    if (body && requestType !== 'GET') {
        fetchOptions.body = JSON.stringify(body);
    }
    const response = await fetch(baseUrl + url, fetchOptions);

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    } else {
        let errorData = await response.json();
        if (typeof errorData === 'object') {
            if (errorData.error) errorData = errorData.error;
            if (errorData.message) errorData = errorData.message;
        } else {
            errorData = "Internal Server Error";
        }
        throw errorData;
    }
}

export { apiService }