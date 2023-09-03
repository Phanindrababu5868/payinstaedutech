import './index.css'


const MemberShip=()=>{

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return(
        <div id="Membership-section">
            <img src="https://res.cloudinary.com/dspbnevuo/image/upload/v1693561810/Group_167_kbsujw.png" alt='student' className="Membership-section-img" />
            <form className="Membership-form" onSubmit={handleSubmit}>
                <h1>Book now</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <label for="city">CITY</label>
                <input type='text' placeholder="placeholder" id='city' />
                <div className="Membership-form-input-bg-container">
                    <div className="outer-container">
                        <label for="Arrival">ARRIVAL</label>
                        <input type='text' placeholder="11 October" id='Arrival' />
                    </div>
                    <div className="outer-container">
                        <label for="Departure">DEPARTURE</label>
                        <input type='text' placeholder="11 October" id='Departure' />
                    </div>
                </div>
                <div className="Membership-form-input-bg-container">
                    <div className="outer-container">
                        <label for='start'>START</label>
                        <div className="inner-container">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="5" viewBox="0 0 15 5" fill="none">
                                    <path d="M14.3658 0.844452V4.34622H0.357971V0.844452H14.3658Z" fill="black" />
                                </svg></span>
                            <input type='text' placeholder="11 October" id='start' />
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M9.27259 0.591614H6.47103V6.19473H0.86792V8.99628H6.47103V14.5994H9.27259V8.99628H14.8757V6.19473H9.27259V0.591614Z" fill="black" />
                                </svg></span>
                        </div>
                    </div>
                    <div className="outer-container">
                        <label for='Room'>ROOM</label>
                        <div className="inner-container">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="5" viewBox="0 0 15 5" fill="none">
                                    <path d="M14.3658 0.844452V4.34622H0.357971V0.844452H14.3658Z" fill="black" />
                                </svg></span>
                            <input type='text' placeholder="11 October" id='Room' />
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M9.27259 0.591614H6.47103V6.19473H0.86792V8.99628H6.47103V14.5994H9.27259V8.99628H14.8757V6.19473H9.27259V0.591614Z" fill="black" />
                                </svg></span>
                        </div>
                    </div>
                </div>
                <button className='Book-Now-btn' type='submit'>Book Now</button>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" viewBox="0 0 113 113" fill="none" class="Membership-section-ring-img">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.5 113C87.7041 113 113 87.7041 113 56.5C113 25.2959 87.7041 0 56.5 0C25.2959 0 0 25.2959 0 56.5C0 87.7041 25.2959 113 56.5 113ZM56.5 87.4405C73.588 87.4405 87.4405 73.588 87.4405 56.5C87.4405 39.412 73.588 25.5595 56.5 25.5595C39.412 25.5595 25.5595 39.412 25.5595 56.5C25.5595 73.588 39.412 87.4405 56.5 87.4405Z" fill="#F8E27E" fill-opacity="0.2" />
            </svg>
        </div>
    )
}

export default MemberShip