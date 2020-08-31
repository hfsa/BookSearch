import React, { useEffect, useState } from 'react';
import searchUtility from '../utility/mainUtility'


const Card = ({ title }) => {
    let api = searchUtility();
    const [ bookSummary, setbookSummary ] = useState('');
    const [ bookAuthor, setbookAuthor ] = useState('');
    useEffect(() => {
        const index = api.getIndexfromTitle(title);
        const summary = api.getSummaryfromIndex(index);
        const author = api.getAuthorfromindex(index);
        setbookSummary(summary);
        setbookAuthor(author);

    }, [])
    return <div className="card">
        <div className="container">
            <h3>{title}</h3>
            <p>{bookSummary}</p>
            <hr />
            <div className="author">{bookAuthor}</div>
        </div>
    </div>

}

export default Card;