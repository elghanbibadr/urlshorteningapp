
import React ,{useState,useEffect} from 'react';
import axios from 'axios';


const  UrlShortenForm= (props)=> {
    const url='https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b';
    const [enteredUrl,setEnteredUrl]=useState('');
    const [shortened,setShortened]=useState([]);
    const handleFormSubmition=(event)=>{
        event.preventDefault();
        let inputValue=event.target.firstElementChild.value;
        if (!inputValue)return;
        setEnteredUrl(inputValue);
        axios.get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`
        )
        .then(res=>{
          let {short_link,short_link2,short_link3}=res.data.result;
          setShortened([short_link,short_link2,short_link3]);

        }).catch(err=>alert(err))
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