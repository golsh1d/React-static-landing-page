import './News.css'
import NewsContent from './NewsContent'

function News() {

    let NewsContentProps = [
        {image : './Img/News/News2.jpg' , title : 'We Have Made Illdy Theme SEO Friendly' , description : 'Illdy One Page WordPress theme is fully SEO friendly and is ready to help you to achieve the highest rankings…' } ,
        {image : './Img/News/News1.jpg' , title : 'Stunning One Page WordPress Theme For Masses' , description : 'This theme is not just free, it is free for private and commercial use since it is licensed under GPL…' } ,
        {image : './Img/News/News3.jpg' , title : 'Hello World!' , description : 'Welcome to colorlib.com. This is our first post around Illdy WordPress theme. Now show that you can make out of it.…' } ,
    ]

    return(
        <div className='News-wrapper'>
            <div className='News-main-content container'>
                <div className='News-title'>Latest News</div>
                <div className='News-description'>
                    If you are interested in the latest articles in the industry, take a sneak peek at our blog. You have nothing to loose!
                </div>
                <button className='News-btn'>
                    <span class="material-symbols-outlined">
                    expand_circle_right
                    </span>
                    <p>See blog</p>
                </button>
                <div className='News-content-wrapper'>
                    {NewsContentProps.map((NewsContentProp) => (
                        <NewsContent {...NewsContentProp}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News