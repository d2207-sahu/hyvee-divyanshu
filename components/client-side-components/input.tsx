"use client";
import React, { ForwardRefRenderFunction, forwardRef } from 'react'
import Button from './button';
interface ChildProps {
    callback: Function,
    setErrorState: Function,
    error: string | undefined
}
const Input: ForwardRefRenderFunction<HTMLInputElement, ChildProps> = (props: ChildProps, nameRef: any) => {
    return (
        <div className="relative">
            <input
                ref={nameRef}
                className=" bg-gray-800 border border-green-500 font-semibold font-roboto rounded-md p-4  text-white focus:border-green-500 focus:outline-none focus:ring-2 h-16 focus:ring-green-500"
                type="text"
                placeholder="Enter Name..."
                onChange={(e) => {
                    props.setErrorState("");
                }}
                onKeyDown={(e) => {
                    if (e.code === "Enter" || e.code === "NumpadEnter") {
                        props.callback();
                    }
                }}
            ></input>
            <Button
                disabled={props.error ? true : false}
                callback={props.callback} />
        </div>

    )
};

export default forwardRef(Input)