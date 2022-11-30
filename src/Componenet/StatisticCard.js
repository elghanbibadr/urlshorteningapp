import React from 'react';

function StatisticCard(props) {
    return (
        <div className='statistics__card'>
                    <div class="statistics__card__logo-wrapper">
                        <img src={props.src} className='statistics__card__logo'/>
                    </div>
                    <h3 className='statistics__card__title'>{props.title}</h3>
                    <p className='statistics__card__text'>{props.text}</p>
             </div>
    );
}

export default StatisticCard;