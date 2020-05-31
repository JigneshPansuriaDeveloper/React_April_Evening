import React, { useState, useEffect } from 'react';
import DisplayComponent from './DisplayComponent'

const API_URL = "http://localhost:8900/news";
function Hook() {
    const [title] = useState('Developer Funnel')
    const [counter, setCounter] = useState(0);
    const [count, setCount] = useState(50);
    const [news, setNews] = useState()



    useEffect(() => {
        fetch(API_URL).
            then(res => res.json()).
            then((data) => {
                setNews(data)
            })

    })

    console.log('news data', news)

    return (
        <div>
            <center>
                Learning Hook in functional component
    <h1>{title}</h1>
                <p>{counter}</p>
                <button onClick={() => setCounter(counter + 1)}>Click me
                </button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>Click me
                </button>
                <DisplayComponent mydata={news} />
            </center>
        </div>
    )
}

export default Hook;