
import React ,{useState,useEffect} from 'react';


const  UrlShortenForm= (props)=> {
  const handleInputFocused=(e)=>e.target.classList.add('input-redBorder');
  const handleInputUnFocused=(e)=>e.target.classList.remove('input-redBorder');
  const [inputContent,setInputContent]=useState('');

    const handleFormSubmition=(event)=>{
        event.preventDefault();
        let inputValue=event.target.firstElementChild.value;
        if (!inputValue)return;
        props.onLift(inputValue);
       setInputContent('');
    }

    return (
        <div className='container'>
           <form onSubmit={handleFormSubmition} className='urlShortenForm card'>
            <input onBlur={handleInputUnFocused} onFocus={handleInputFocused} className='urlShortenForm__input' onChange={(e)=>setInputContent(e.target.value)} value={inputContent} type="text"  placeholder='Shorten a link here'/>
            <button className='btn urlShortenForm__btn'>Shorten it!</button>
           </form>
        </div>
    
    );
}

export default UrlShortenForm;
// https://api.shrtco.de/v2/shorten?url=${link}`