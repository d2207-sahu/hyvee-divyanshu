"use client"
import React, { useRef, useState } from 'react'
import Input from './input';
import { useRouter } from 'next/navigation';
import isValidName from '@/utils/validName';

const InputStateComponent = () => {
    const router = useRouter();
    const [errorText, setErrorText] = useState("");
    const nameRef = useRef<HTMLInputElement>(null);

    function onNameSubmission() {
        let name = nameRef.current?.value?.trim();
        if (name && name.length >= 1 && isValidName(name)) {
            router.push(`/name?name=${name}`);
            return;
        }
        setErrorText("Invalid Name!");
    }

    return <>
        <Input callback={onNameSubmission} error={errorText} setErrorState={setErrorText} ref={nameRef} />
        {errorText && <p className='text-red-500 font-semibold font-roboto mt-4 text-wrap text-xs'>{errorText}</p>}
    </>
}

export default InputStateComponent