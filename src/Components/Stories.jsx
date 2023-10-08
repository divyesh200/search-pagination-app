import React, { useEffect } from 'react'
import { useGloblContext } from '../Context/Context'
import '../App.css';
const Stories = () => {
    const { hits, isLoading, removePost } = useGloblContext();
    if (isLoading) {
        return (
            <>
                <h2 className='pt-2'>Loading....</h2>
            </>
        );
    }

    return (
        <>
            <div className='main'>
                {
                    hits.map((curPost) => {
                        const { title, author, objectID, url, num_comments } = curPost;
                        return (
                            <div className='card  p-3 my-2 shadow' key={ objectID }>
                                <h5>{ title }</h5>
                                <p>
                                    By <span>{ author }</span> | <span>{ num_comments } comments</span>
                                </p>
                                <div className='d-flex justify-content-between  '>
                                    <a className="text-decoration-none"
                                        href={ url }
                                        target='_blank'>
                                        Read More
                                    </a>
                                    <a className="text-decoration-none text-danger"
                                        href="#"
                                        onClick={ () => removePost(objectID) }>
                                        Remove
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Stories;
