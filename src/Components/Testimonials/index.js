import './index.css'

const Testimonials =()=>{
    return(
        <div className="Testimonials-section">
            <h1 className="Testimonials-heading">Testimonials</h1>
            <div className="Testimonials-container">
                <div className="Testimonials-bg-profile-container">
                    <img src="https://res.cloudinary.com/dspbnevuo/image/upload/v1693561809/Avatar_3_lh96qk.png" alt='student' />
                    <div>
                        <p className="Testimonials-person-name">Corey Korsgaard</p>
                        <div className="line"></div>
                        <p className="Testimonials-descriptions">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className="Testimonials-bg-profile-container">
                    <img src="https://res.cloudinary.com/dspbnevuo/image/upload/v1693561809/Avatar_4_rq0cph.png" alt='student'/>
                    <div>
                        <p className="Testimonials-person-name">Jakob Aminoff</p>
                        <div className="line"></div>
                        <p className="Testimonials-descriptions">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className="Testimonials-bg-profile-container">
                    <img src="https://res.cloudinary.com/dspbnevuo/image/upload/v1693561809/Ellipse_1_eco80b.png" alt='ellipse' />
                    <div>
                        <p className="Testimonials-person-name">Carla Press</p>
                        <div className="line"></div>
                        <p className="Testimonials-descriptions">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials