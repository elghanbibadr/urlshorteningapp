const Hero=()=>{
    return(
        <section className="hero grid grid grid--cls2">
         <div className="hero__image-container">
            <img src="/images/illustration-working.svg" className="hero__img"/>
         </div>
         <div className="hero__content">
            <h1 className="hero__title">More than just shorter links</h1>
            <p className="hero__desc">Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button className="hero__btn btn btn--rounded" >Get Started</button>
         </div>
        </section>
    )
}


export default Hero;