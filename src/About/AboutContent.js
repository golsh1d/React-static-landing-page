import './AboutContent.css'
import propTypes from 'prop-types'

function AboutContent({percent, icon, text, lineWidth, mainColor}) {

    return(
        <div className="About-content w-80-About-content-max-width-768 w-30-About-content-min-width-768
        mb-About-content-max-width-768 mb-About-content-min-width-768">
            <div className="About-content-under-line">
                <div className="About-content-line" style={{width : lineWidth , backgroundColor : mainColor}}>
                <div className="About-content-circle" style={{backgroundColor : mainColor}}></div>
                <div className="About-content-percent" style={{backgroundColor : mainColor}}>
                    {percent}
                    <span className="About-content-triangular" style={{borderTopColor : mainColor}}></span>
                </div>
                </div>
            </div>
            <div className="About-content-message" style={{color : mainColor}}>
                <span className="material-symbols-outlined">
                    {icon}
                </span>
                <p className="About-content-text">{text}</p>
            </div>
        </div>
    )
}

AboutContent.propTypes = {
    percent : propTypes.string ,
    icon : propTypes.string ,
    text : propTypes.string ,
    lineWidth : propTypes.string ,
    mainColor : propTypes.string 
}

export default AboutContent