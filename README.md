# Hyvee-Divyanshu

Unlock Identity Insights: Discover Age, Gender, and Nationality with Just a Name.

## screenshots
![image](https://github.com/d2207-sahu/hyvee-divyanshu/assets/55633712/efbedaf2-b721-4b6c-96be-e7c9b44f4e96)
![image](https://github.com/d2207-sahu/hyvee-divyanshu/assets/55633712/b6c896ad-0bca-4024-874d-016fb3b09c66)


## Description

This Next.js project leverages the Next.js API routes feature to reduce the number of API calls required by combining multiple API endpoints into a single API call. By consolidating API requests, the application improves performance and reduces network overhead.

## Features

-   Reduces API calls by combining multiple endpoints into a single API call.
-   Improved performance and reduced network overhead.
-   Implmented two pages in nextjs.
-   Handling the state between pages using URL Search Params

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine:
2. Install dependencies:

```
cd hyvee-divyanshu
npm install
```

3. Run the development server:
   `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## API Rate Limit

Please note that the API rate limit for this project is set to 100 requests per IP address. If you exceed this limit, you may receive errors or be blocked from accessing the API temporarily.

If you encounter errors or receive a message indicating that you have exceeded the API rate limit, please uncomment the following code in your application:
The code is present in the file app/api/profile/route.ts
[Link to Specific Code](https://github.com/d2207-sahu/hyvee-divyanshu/blob/616e45f9626df2571ca3b976f89e11af03f82209/app/api/profile/route.ts#L15)

## Technologies Used
-   Next.js
-   React
-   Tailwind CSS
-   FontAwesome Icons
