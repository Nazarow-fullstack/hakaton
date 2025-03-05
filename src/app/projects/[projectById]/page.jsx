"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'

const ById = () => {
    let {projectById} = useParams();
    return <>
        <div className="text-[white]">Hello I am {projectById}</div>
    </>
}

export default ById