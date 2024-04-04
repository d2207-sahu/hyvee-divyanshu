import React from 'react'

const ErrorComponent = ({ error }: { error: string }) => {
    return (
        <div className="flex flex-col items-center h-screen  justify-center"><h1 className="text-white text-2xl mb-4">{"Error Happened"}</h1>
            <h2 className="text-white text-xs">{error}</h2></div>
    )
}

export default ErrorComponent