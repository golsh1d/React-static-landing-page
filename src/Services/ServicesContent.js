import './ServicesContent.css'

function ServicesContent({ icon , title , color : mainColor , description }) {
    return(
        <div className='Services-content-wrapper Services-content-wrapper-width-max-768 Services-content-wrapper-width-min-768 
        Services-content-wrapper-mb-max-768 Services-content-wrapper-mb-min-768'>
            <div className='Services-content-icon'>
                <span class="material-symbols-outlined" style={{color : mainColor}}>{icon}</span>
            </div>
            <div className='Services-content-title' style={{color : mainColor}}>{title}</div>
            <div className='Services-content-description'>
                {description}
            </div>
        </div>
    )
}

export default ServicesContent