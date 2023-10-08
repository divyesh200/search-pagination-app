import React from 'react'
import { useGloblContext } from '../Context/Context'

const Pagination = () => {
    const { page, nbPages, getPrevPage, getNextPage } = useGloblContext();
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <button
                className='btn btn-dark'
                onClick={ () => getPrevPage() }>
                Prev
            </button>
            <p className='pt-3 px-3'>
                { page + 1 } of { nbPages }
            </p>
            <button
                className='btn btn-dark'
                onClick={ () => getNextPage() }>
                Next
            </button>
        </div>
    )
}

export default Pagination
