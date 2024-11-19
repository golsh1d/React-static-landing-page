import Nav from "./Nav";
import './Header.css'

function Header() {
    return (
        <header className="Header-wrapper">
            <Nav></Nav>
            <div className="Header-img-wrapper height-min-width-1200 height-min-width-992 height-min-width-768 height-max-width-768">
                <img src="https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/images/front-page/front-page-header.jpg" alt="header-img" />
                <div className="Header-img-overlay"></div>
            </div>
            <div className="Header-detail container">
                <h1 className="Header-title font-size-title-max-width-768 font-size-title-min-width-768">Clean<span></span>Slick<span></span>Pixel Perfect</h1>
                <p className="Header-description display-header-description-max-width-768 display-header-description-min-width-768">
                lldy is a great one-page theme, perfect for developers and designers but also for someone who just wants a <br/>
                new website for his business. Try it now!
                </p>
                <div className="Header-btn-wrapper">
                    <button className="Header-learn-more-btn learn-more-btn-mb-max-width-768 learn-more-btn-mb-min-width-768">Learn more</button>
                    <button className="Header-download-btn">Download</button>
                </div>
            </div>
        </header>
    );
}

export default Header