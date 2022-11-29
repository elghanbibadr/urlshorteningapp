import React from 'react';

function UrlShortenResult(props) {
    return (
        <ul className='urlShortendList card'>
           <li className='urlShortendList-result'>
            <p className='urlShortendList-result__link'>shrtco.de/8tJRCV</p>
            <button className='urlShortendList-result__copyLinkBtn btn '>Copy</button>
            </li>  
        </ul>
    );
}

export default UrlShortenResult;