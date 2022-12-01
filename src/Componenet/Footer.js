import React from 'react';
import FooterList from './FooterList';
function Footer(props) {
    return (
        <footer className='footer grid grid--cls5'>
            <div className='footer__logo-box'>
                <img src='/images/logo.svg'/>
            </div>
            <FooterList title='Features' listLinks={['Link Shortening','Branded Links','Analytics']}/>
            <FooterList title='Resources' listLinks={['Link Shortening','Branded Links','Analytics']}/>
            <FooterList title='Company' listLinks={['Link Shortening','Branded Links','Analytics']}/>
            <div className='footer__media-icons-box'>
                <img className='footer__media-icons' src='/images/icon-facebook.svg' />
                <img className='footer__media-icons' src='/images/icon-twitter.svg' />
                <img className='footer__media-icons' src='/images/icon-pinterest.svg'/>
                <img className='footer__media-icons' src='/images/icon-instagram.svg'/>
            </div>
        </footer>
    );
}

export default Footer;