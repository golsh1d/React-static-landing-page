import './About.css'
import AboutContent from './AboutContent'

function About() {

    let AboutContentInfo = [
        {percent : "60%" , icon : "custom_typography" , text : "Typography", lineWidth : "60%", mainColor : "#f18b6d"} ,
        {percent : "82%" , icon : "edit" , text : "Design", lineWidth : "82%", mainColor : "#f1d204"} ,
        {percent : "86%" , icon : "code" , text : "Development", lineWidth : "82%", mainColor : "#6a4d8a"} ,
    ]

    return (
        <div className="About-wrapper">
            <div className="About-container container">
                <div className="About-detail">
                    <div className="About-title">About</div>
                    <div className="About-description About-description-text-justify-max-width-768">
                    It is an amazng one-page theme with great features that offers an incredible experience. It is easy to install, make changes, adapt for your business. A modern design with clean lines and styling for a wide variety of content, exactly how a business design should be. You can add as many images as you want to the main header area and turn them into slider.
                    </div>
                </div>
                <div className="About-content-wrapper About-content-wrapper-flex-dir-col-max-width-768
                About-content-wrapper-flex-dir-row-min-width-768">
                    {AboutContentInfo.map((AboutContentItem) => (
                        <AboutContent {...AboutContentItem}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About