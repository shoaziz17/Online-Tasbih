import React from 'react'
import data from "../Utilities/data.json";
function Duas() {

    const duas = data.map((dua) => {
        return (
            <div className='flex justify-between bg-green-500 text-white font-semibold rounded-md text-center px-2 py-1' key={dua.id}>
                <h1>{dua.dua}</h1>
            </div>
        )
    })


    return (
        <div className='space-y-5 m-10'>
            {duas}
        </div>
    )
}

export default Duas