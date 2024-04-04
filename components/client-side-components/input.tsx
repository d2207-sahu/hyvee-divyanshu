"use client";
import React, { ForwardRefRenderFunction, forwardRef, useRef } from 'react'
import Button from './button';
interface ChildProps {
    callback: Function
}
const Input: ForwardRefRenderFunction<HTMLInputElement, ChildProps> = (props: ChildProps, nameRef: any) => {

    return (
        <div className="relative">
            <input
                ref={nameRef}
                className=" bg-gray-800 border border-green-500 rounded-md p-4  text-white focus:border-green-500 focus:outline-none focus:ring-2 h-16 focus:ring-green-500"
                type="text"
                placeholder="Enter Name..."
                onKeyDown={(e) => {
                    if (e.code === "Enter") {
                        props.callback();
                    }
                }}
            ></input>
            <Button
                disabled={nameRef.current?.value}
                callback={props.callback} />
        </div>

    )
};

export default forwardRef(Input)