import React, { useContext } from 'react';
import HomeContext from '../../context/home/HomeContext';

const HomeItems = () => {

    const homeContext = useContext(HomeContext);
    const { news, getNews } = homeContext;
    getNews();
    return (
        <div className="card">
            <h3>{news.title}</h3>
            <a href={news.link}>{news.link}</a>
            <p>{news.summary}</p>
        </div>
    )
}


export default HomeItems