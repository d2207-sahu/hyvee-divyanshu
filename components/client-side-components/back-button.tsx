"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <button
            id="back-button"
            onClick={handleBack}
            className="fixed top-4 bg-gray-800 left-4 text-green-500  pl-4 p-2 py-3 rounded-md shadow-md transition-opacity duration-300 hover:opacity-75 z-50"
        >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        </button>
    );
}

export default BackButton