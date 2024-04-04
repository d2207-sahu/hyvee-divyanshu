import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Button = ({ callback, disabled }: { callback: Function, disabled: boolean }) => {
    return (
        <button
            disabled={disabled}
            className={`absolute inset-y-0 right-0 ${disabled ? "bg-green-800" : "bg-green-500"} text-white px-2 m-2 py-2 rounded-md`}
            onClick={() => callback()}
        >
            <FontAwesomeIcon color="black" icon={faSearch} />
        </button>
    )
}

export default Button