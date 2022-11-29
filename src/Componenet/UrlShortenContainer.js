import React,{useState} from 'react';
import UrlShortenForm from './UrlShortenForm';
import UrlShortenResult from './UrlShortenResult';
import axios from 'axios';
function UrlShortenContainer(props) {

    const url='https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b';
    const [enteredUrl,setEnteredUrl]=useState('');
    const [shortened,setShortened]=useState([]);
    const [dataArrived,setDataArrived]=useState(false)
    const handleGrabedInputValue=(inputValue)=>{
        axios.get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
         .then(res=>{
           let {short_link,short_link2,short_link3}=res.data.result;
           setShortened([short_link,short_link2,short_link3]);
         }).catch(err=>alert(err)).finally(()=>setDataArrived(true));
    }

    if (!dataArrived){
        return (
            <div className='urlShortenContainer'>
                 <UrlShortenForm onLift={handleGrabedInputValue} />
            </div>
        );
    }else{
        return (
            <div className='urlShortenContainer'>
                 <UrlShortenForm onLift={handleGrabedInputValue} />
                  {shortened.map(link=>{
                 return(
                    <UrlShortenResult shortenedUrl={link}/>
                 )
                  })}
            </div>
        );
    }
}

export default UrlShortenContainer;