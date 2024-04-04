"use client"
import React, { useRef } from 'react'
import Input from './input';
import { useRouter } from 'next/navigation';

const InputStateComponent = () => {
    const router = useRouter();
    const nameRef = useRef<HTMLInputElement>(null);

    function errorPopup() {
        alert("Please Enter Name..");
    }

    function onNameSubmission() {
        if (nameRef.current)
            if (nameRef.current.value !== "") {
                router.push(`/name?name=${nameRef.current.value}`);
                return;
            }
        errorPopup()
    }

    return <Input callback={onNameSubmission} ref={nameRef} />
}

export default InputStateComponent