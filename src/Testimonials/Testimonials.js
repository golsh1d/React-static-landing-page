import './Testimonials.css'
import TestimonialsItem from './TestimonialsItem'

function Testimonials() {
    let TestimonialsInfo = {
        image : 'https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/58/2016/02/mike-muller-127x127.jpg',
        name : 'Mike Muller',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam deserunt quo, ipsa culpa aliquam libero consequatur voluptatem rerum, laudantium dolore dicta nam! Eos, autem. Quasi totam placeat nemo illo possimus molestiae molestias fuga cum, nostrum nesciunt, maiores incidunt fugit omnis odio! Aspernatur, ex atque.',
    }

    return(
        <div className="Testimonials-wrapper">
            <TestimonialsItem {...TestimonialsInfo}/>
            <div className="TestimonialsItem-controller-wrapper">
                <div className="TestimonialsItem-controller controller1"></div>
                <div className="TestimonialsItem-controller controller2"></div>
                <div className="TestimonialsItem-controller controller3"></div>
                <div className="TestimonialsItem-controller controller4"></div>
            </div>
        </div>
    )
}

export default Testimonials