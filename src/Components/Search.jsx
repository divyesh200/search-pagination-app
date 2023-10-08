import React from 'react'
import '../App.css'
import { useGloblContext } from '../Context/Context'
const Search = () => {
    const { query, searchPost } = useGloblContext();

    return (
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <input
                    type="text"
                    className="inpute"
                    placeholder='Search here'
                    value={ query }
                    onChange={ (e) => searchPost(e.target.value) }
                />
            </form>
        </div>
    )
}

export default Search
