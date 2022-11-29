import React, { useState } from 'react';
import UrlShortenForm from './UrlShortenForm';
import UrlShortenResult from './UrlShortenResult';
import axios from 'axios';
function UrlShortenContainer() {
    const [shortened, setShortened] = useState([]);
    const [dataArrived, setDataArrived] = useState(false)
    const handleGrabedInputValue = (inputValue) => {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            .then(res => {
                let { short_link, short_link2, short_link3 } = res.data.result;
                setShortened([short_link, short_link2, short_link3]);
            }).catch(err => alert(err)).finally(() => setDataArrived(true));
    }

    return (
        <div className='urlShortenContainer'>
            <UrlShortenForm onLift={handleGrabedInputValue} />
            {dataArrived && (shortened.map(link =><UrlShortenResult shortenedUrl={link}/>))}
        </div>
    );

}

export default UrlShortenContainer;