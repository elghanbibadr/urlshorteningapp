import React from 'react';



function FooterList(props) {
    return (
       <div className='footer__list-box'>
        <h4 className='footer__list-title'>{props.title}</h4>
        <ul className='footer__list'>
        {props.listLinks.map(link=>{
            return(
                <li className='footer__list-link'>{link}</li>
            )
        })}
        </ul>
       </div>
    );
}

export default FooterList;