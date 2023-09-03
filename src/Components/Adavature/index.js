import "./index.css"

const Advature=()=>{
    return(
      
        <div className="adavture-section" id="adavture-section">
            <ul className="adavture-section-student-cards-container">
                <li className="adavture-section-student-card">
                    <img src="https://res.cloudinary.com/dspbnevuo/image/upload/v1693557986/avatar_fvpq7o.png" alt='student'/>
                    <div>
                        <p className="adavture-section-student-name">Jenny Wilson</p>
                        <p className="adavture-section-student-details">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </li>
                <li className="adavture-section-student-card">
                    <img src="https://res.cloudinary.com/dspbnevuo/image/upload/v1693557986/avatar_2_xpzmfw.png" alt='student'/>
                    <div>
                        <p className="adavture-section-student-name">Jenny Wilson</p>
                        <p className="adavture-section-student-details">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </li>
                <li className="adavture-section-student-card">
                    <img src="https://res.cloudinary.com/dspbnevuo/image/upload/v1693557986/avatar_1_qmfbpk.png" alt='student'/>
                    <div>
                        <p className="adavture-section-student-name">Jenny Wilson</p>
                        <p className="adavture-section-student-details">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </li>
            </ul>
            <div className="adavture-section-details">
                <span className="adavture-section-details-Tropical-heading">Tropical Adventure</span>
                <span className="adavture-section-details-Tropical-subheading">for Students.</span>
                <p>Student Tropical Vacation: Relax and Recharge</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit </li>
                    <li>tortor id euismod habitant</li>
                    <li>Sed suspendisse id in ultrices</li>
                </ul>
                <button>Explore More</button>
            </div>
            <div className="adavture-section-ring-container">
                <div></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 168 168" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168ZM84 130C109.405 130 130 109.405 130 84C130 58.5949 109.405 38 84 38C58.5949 38 38 58.5949 38 84C38 109.405 58.5949 130 84 130Z" fill="#87CC81" fill-opacity="0.2" />
                </svg>
            </div>
            <div className="adavture-section-ellipse-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                    <path d="M0 46.5C0 40.3935 1.20276 34.3469 3.5396 28.7052C5.87645 23.0636 9.30161 17.9375 13.6195 13.6195C17.9375 9.30161 23.0636 5.87644 28.7052 3.5396C34.3469 1.20276 40.3935 -2.66922e-07 46.5 0L46.5 13.95C42.2255 13.95 37.9928 14.7919 34.0437 16.4277C30.0945 18.0635 26.5062 20.4611 23.4837 23.4837C20.4611 26.5062 18.0635 30.0945 16.4277 34.0437C14.7919 37.9928 13.95 42.2255 13.95 46.5H0Z" fill="#BE554B" />
                </svg>
            </div>
        </div>
    )
}

export default Advature