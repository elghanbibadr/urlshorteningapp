import React from 'react';
import StatisticCard from './StatisticCard';

function Statistics() {
    return (
        <section className='statistics'>
            <h2 className='statistics__title'>Advanced Statistics</h2>
             <p className='statistics__desc'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
             <div className='statistics__card-container'>
               <StatisticCard src='/images/icon-brand-recognition.svg' title='Brand Recognition' text='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'/>
               <StatisticCard src='/images/icon-detailed-records.svg' title='Detailed Records' text='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'/>
               <StatisticCard src='/images/icon-fully-customizable.svg' title='Fully Customizable' text='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'/>        
             </div>
        </section>
    );
}

export default Statistics;