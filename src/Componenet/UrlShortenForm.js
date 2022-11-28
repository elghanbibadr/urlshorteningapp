
import React from 'react';


const  UrlShortenForm=(props)=> {
    return (
        <div className='container'>
           <form className='urlShortenForm'>
            <input className='urlShortenForm__input' type="text" placeholder='Shorten a link here'/>
            <button className='btn urlShortenForm__btn'>Shorten it!</button>
           </form>
        </div>
    );
}

export default UrlShortenForm;
// https://api.shrtco.de/v2/shorten?url=${link}`