import "./index.css"

const OurDetsination=()=>{

    return(
        <div id="our-destination-section">
            <h4 className="our-destination-heading">Our Destinations</h4>
            <div className="our-destination-section-card-container">
                <div className="our-destination-section-card">
                    <img className="our-destination-section-university-img" alt="Harvard university" src='https://res.cloudinary.com/dspbnevuo/image/upload/v1693629377/card-image_zg4nyy.png' />
                    <div className="our-destination-section-unversty-details-container">
                        <h4 className='our-destination-section-university-name'>Harvard university</h4>
                        <div className="our-destination-section-university-address-container">
                            <p className="our-destination-section-university-address">Cambridge, Massachusetts, UK</p>
                            <div className="our-destination-section-three-dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-destination-section-card">
                    <img className="our-destination-section-university-img" alt='Oxford University' src='https://res.cloudinary.com/dspbnevuo/image/upload/v1693629377/card-image-1_gvpuw8.png' />
                    <div className="our-destination-section-unversty-details-container">
                        <h4 className='our-destination-section-university-name'>Oxford University</h4>
                        <div className="our-destination-section-university-address-container">
                            <p className="our-destination-section-university-address">Oxford, England</p>
                            <div className="our-destination-section-three-dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-destination-section-card">
                    <img className="our-destination-section-university-img" alt='Stanford University' src='https://res.cloudinary.com/dspbnevuo/image/upload/v1693629377/card-image-2_hh7t3v.png' />
                    <div className="our-destination-section-unversty-details-container">
                        <h4 className='our-destination-section-university-name'>Stanford University</h4>
                        <div className="our-destination-section-university-address-container">
                            <p className="our-destination-section-university-address">Stanford, California</p>
                            <div className="our-destination-section-three-dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-destination-section-card">
                    <img className="our-destination-section-university-img" alt='Nanyang Technological University' src='https://res.cloudinary.com/dspbnevuo/image/upload/v1693629377/card-image-3_cbqhp7.png' />
                    <div className="our-destination-section-unversty-details-container">
                        <h4 className='our-destination-section-university-name'>Nanyang Technological University</h4>
                        <div className="our-destination-section-university-address-container">
                            <p className="our-destination-section-university-address">Nanyang Ave, Singapura</p>
                            <div className="our-destination-section-three-dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-destination-section-pagination">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path d="M45 21.0826H5.42659L14.3463 12.1628L12.3418 10.1583L0 22.4999L12.3418 34.8418L14.3463 32.8372L5.42659 23.9175H45V21.0826Z" fill="#262626" />
                </svg>
                <p><span>2</span>/140
                </p><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path d="M0 21.0826H39.5734L30.6537 12.1628L32.6582 10.1583L45 22.4999L32.6582 34.8418L30.6537 32.8372L39.5734 23.9175H0V21.0826Z" fill="#F27A44" />
                </svg>
            </div>
        </div>
    )
}

export default OurDetsination