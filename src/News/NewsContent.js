import './NewsContent.css'

function NewsContent({ image , title , description }) {
    return(
        <div className='NewsContent-wrapper NewsContent-wrapper-width-max-768 NewsContent-wrapper-width-min-768 NewsContent-wrapper-width-min-992
        NewsContent-wrapper-mb-max-768 NewsContent-wrapper-mb-min-768 NewsContent-wrapper-mb-min-992'>
            <div className='NewsContent-img-wrapper'>
                <img src={image} alt="Newsimg" />
            </div>
            <div className='NewsContent-title'>
                {title}
            </div>
            <div className='NewsContent-description'>
                {description}
            </div>
            <div className='NewsContent-link'>
            <span class="material-symbols-outlined">
                    expand_circle_right
                    </span>
                    <p>Read more</p>
            </div>
        </div>
    )
}

export default NewsContent