// context creation 
// provider 
// consumer lengthy remove useContext Hook 
// useContext hook 

import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppContext = React.createContext();

// to create provider function 
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {

        dispatch({ type: "SET_LOADING" });

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log('data::: ', data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            });
            // isLoading = false;
        } catch (error) {
            console.log('error::: ', error);
        }
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page])

    // to remove the post 
    const removePost = (post_id) => {
        dispatch({
            type: "REMOVE_POST",
            payload: post_id
        });
    }

    // search inpute 
    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery,
        })
    }

    // pagination 
    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        })
    }

    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE",
        })
    }


    // to call tech api func 


    return (
        <AppContext.Provider value={ { ...state, removePost, searchPost, getNextPage, getPrevPage } }>
            { children }
        </AppContext.Provider>
    );

}

// custom hook create 
const useGloblContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGloblContext }