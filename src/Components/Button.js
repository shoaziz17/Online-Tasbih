import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa";
import sound1 from '../Utilities/sound1.mp3'

function Button() {
    const [count, setCount] = useState(0);

    const counter = () => {
        setCount(count + 1);
        if(count===100){
            console.log('Do you wanna chnage?');
        }
        new Audio(sound1).play();
    }

    const restart = () => {
        if (window.confirm('Are you sure to restart?'))
            setCount(0);
    }



    return (
        <div className='flex flex-col space-y-10 items-center justify-center'>
            <h1 className='text-white text-[100px] font-semibold font-sans'>{count}</h1>
            <button onClick={counter} className='text-green-300 text-7xl cursor-pointer bg-green-800 rounded-full p-10'>
                <FaAngleUp />
            </button>
            <button onClick={restart} className='bg-slate-300 rounded-md px-3 py-1 font-semibold'>Reset</button>
        </div>
    )
}

export default Button