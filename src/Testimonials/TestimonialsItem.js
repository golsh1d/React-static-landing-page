import './TestimonialsItem.css'

function TestimonialsItem({ image , name , description }) {
    return (
        <div className="container TestimonialsItem-wrapper">
            <div className="TestimonialsItem-title">Testimonials</div>
            <div className="TestimonialsItem-img-wrapper">
                <img src={image} alt="" />
            </div>
            <div className="TestimonialsItem-description">
                {description}
            </div>
            <div className="TestimonialsItem-name">
                {name}
            </div>
        </div>
    )
}

export default TestimonialsItem