"use client"

import React, { useRef, useState } from 'react'
import { UseQueryOptions, UseQueryResult, useQuery } from 'react-query'

const fetchProfile = async () => {
    const response = await fetch('http://localhost:3000/api/profile?name=')
    return response.json()
}

const NameComponent = () => {
    let [name, setName] = useState("");
    let inputRef = useRef<HTMLInputElement>(null);
    const { isLoading, error, data }: UseQueryResult = useQuery('profileData', fetchProfile)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.toString()}</div>


    return (
        <center>
            <input
                ref={inputRef}
                placeholder='Enter a name..'
                onClick={(e) => {
                    // can implement the debouncing here
                    setName(e.currentTarget.value)
                }}
            ></input>
            <button
                onClick={async () => {
                    let result = await fetch("http://localhost:3000/api/profile?name=" + inputRef.current?.value);
                    console.log(await result.json());
                }}>
                FETCH PROFILE
            </button>
        </center>
    )
}

export default NameComponent