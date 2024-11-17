import './Nav.css'

function Nav() {
    return (
        <nav className='nav-wrapper'>
            <div className='container'>
                <div className='nav-sections-wrapper'>
                    <div className='nav-logo-wrapper'>
                        <img src="https://149842022.v2.pressablecdn.com/illdy/wp-content/uploads/sites/58/2016/03/cropped-footer-logo-1.png" alt="nav-logo" />
                    </div>
                    <ul className='nav-menu d-none-max-768 d-block-min-768'>
                        <li><a href="#">About</a></li>
                        <li className='ml-20 ml-40'><a href="#">Portfolio</a></li>
                        <li className='ml-20 ml-40'><a href="#">Testimonials</a></li>
                        <li className='ml-20 ml-40'><a href="#">Services</a></li>
                        <li className='ml-20 ml-40'><a href="#">Blogs</a></li>
                        <li className='ml-20 ml-40'><a href="#">Our team</a></li>
                        <li className='ml-20 ml-40'><a href="#">Contact Us</a></li>
                    </ul>
                    <span class="material-symbols-outlined ham d-block-max-768 d-none-min-768">menu</span>
                </div>
            </div>
        </nav>
    )
}

export default Nav