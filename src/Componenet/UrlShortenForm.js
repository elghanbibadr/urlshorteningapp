
import React ,{useState,useEffect} from 'react';


const  UrlShortenForm= (props)=> {


    const handleFormSubmition=(event)=>{
        event.preventDefault();
        let inputValue=event.target.firstElementChild.value;
        if (!inputValue)return;
        props.onLift(inputValue);
    }
    
    return (
        <div className='container'>
           <form onSubmit={handleFormSubmition} className='urlShortenForm card'>
            <input className='urlShortenForm__input' type="text" placeholder='Shorten a link here'/>
            <button className='btn urlShortenForm__btn'>Shorten it!</button>
           </form>
        </div>
    
    );
}

export default UrlShortenForm;
// https://api.shrtco.de/v2/shorten?url=${link}`