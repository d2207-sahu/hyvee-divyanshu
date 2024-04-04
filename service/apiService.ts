const headers: {
    "Content-Type"?: string, 'Access-Control-Allow-Methods': string
} = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
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
    const baseUrl: string = process.env.NEXT_BASE_CLIENT_URL ?? "http://localhost:3000/api/profile?name=";


    if (body && requestType !== 'GET') {
        fetchOptions.body = JSON.stringify(body);
    }
    const response = await fetch(baseUrl + url, fetchOptions);

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    } else {
        const errorData = await response.json();
        throw errorData.message;
    }
}

export { apiService }