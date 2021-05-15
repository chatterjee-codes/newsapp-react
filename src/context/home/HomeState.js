import React, {useReducer} from 'react';
import axios from 'axios';
import homeContext from './HomeContext';
import homeReducer from './HomeReducer';
import {
    GET_NEWS
} from '../types';

const HomeState = (props) => {
    const initialState = {
        news: {}
        
    }

    const [state, dispatch] = useReducer(homeReducer, initialState);


    //get 1st news from api
    const getNews = async () => {
        let sixNews = [];
        const res = await axios.get('https://api.first.org/data/v1/news');


        dispatch({
            type: GET_NEWS,
            payload: res.data.data[0]
        })
        
        
    }

    return (
        <homeContext.Provider
            value = {{
                news: state.news,
                getNews
            }}
        >

            {props.children}
        </homeContext.Provider>
    )
}

export default HomeState
