import Nav from "./Nav";

function Header() {
    return (
        <header className="Header-wrapper">
            <Nav></Nav>
            <div className="Header-img-wrapper">
                <img src="" alt="header-img" />
            </div>
            <div className="Header-detail">
                <h1 className="Header-title">Clean.Slick.Pixel Perfect</h1>
                <p className="Header-description">
                lldy is a great one-page theme, perfect for developers and designers but also for someone who just wants a new website for his business. Try it now!
                </p>
                <div className="Header-btn-wrapper">
                    <button className="Header-learn-more-btn">Learn more</button>
                    <button className="Header-download-btn">Download</button>
                </div>
            </div>
        </header>
    );
}

export default Header