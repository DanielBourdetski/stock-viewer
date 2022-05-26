import React from 'react'

export default function Header() {
    return (
        <div className='mt-5'>
            <h1 className='display-4'>Card Viewer</h1>
            <nav>
                <ul className='d-flex flex-row justify-content-evenly w-25 m-auto list-group list-group'>
                    <a className='text-decoration-none' href="#"><li className='list-group-item border rounded-3 px-4'>About</li></a>
                    <a className='text-decoration-none' href="#"><li className='list-group-item border rounded-3 px-4'>Stocks</li></a>
                    <a className='text-decoration-none' href="#"><li className='list-group-item border rounded-3 px-4'>Find Stock</li></a>
                </ul>
            </nav>
        </div>
    )
}
