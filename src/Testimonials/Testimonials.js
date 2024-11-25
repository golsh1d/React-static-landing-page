import React , { Component } from 'react'
import './Testimonials.css'
import TestimonialsItem from './TestimonialsItem'

class Testimonials extends Component {
    constructor(props) {
        super (props)

        this.state = {
            image : 'https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/58/2016/02/mike-muller-127x127.jpg',
            name : 'Mike Muller',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam deserunt quo, ipsa culpa aliquam libero consequatur voluptatem rerum, laudantium dolore dicta nam! Eos, autem. Quasi totam placeat nemo illo possimus molestiae molestias fuga cum, nostrum nesciunt, maiores incidunt fugit omnis odio! Aspernatur, ex atque.',
        }
    }

    clickHandler(event) {
        if (event.target.getAttribute('class').includes('controller1')) {
            this.setState({
                image : 'https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/58/2016/02/mike-muller-127x127.jpg',
                name : 'Mike Muller',
                description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam deserunt quo, ipsa culpa aliquam libero consequatur voluptatem rerum, laudantium dolore dicta nam! Eos, autem. Quasi totam placeat nemo illo possimus molestiae molestias fuga cum, nostrum nesciunt, maiores incidunt fugit omnis odio! Aspernatur, ex atque.',
            })
        } else if (event.target.getAttribute('class').includes('controller2')) {
            this.setState({
                image : 'https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/58/2016/02/hombre-joven-cara-alegre-estudiante-127x127.jpg',
                name : 'John Doe',
                description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam deserunt quo, ipsa culpa aliquam libero consequatur voluptatem rerum, laudantium dolore dicta nam! Eos, autem. Quasi totam placeat nemo illo possimus molestiae molestias fuga cum, nostrum nesciunt, maiores incidunt fugit omnis odio! Aspernatur, ex atque.',
            })
        } else if (event.target.getAttribute('class').includes('controller3')) {
            this.setState({
                image : 'https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/58/2016/02/Aigars-Silkalns-127x127.jpg',
                name : 'Aigars Silkalns',
                description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam deserunt quo, ipsa culpa aliquam libero consequatur voluptatem rerum, laudantium dolore dicta nam! Eos, autem.',
            })
        } else if (event.target.getAttribute('class').includes('controller4')) {
            this.setState({
                image : 'https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/58/2016/02/redhead-1123645_960_720-1-127x127.jpg',
                name : 'Jane Smith',
                description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam deserunt quo, ipsa culpa aliquam libero consequatur voluptatem rerum, laudantium dolore dicta nam! Eos, autem.',
            })
        }
    }

    render() {
        return(
            <div className="Testimonials-wrapper">
                <TestimonialsItem {...this.state}/>
                <div className="TestimonialsItem-controller-wrapper">
                    <div className="TestimonialsItem-controller controller1" onClick={(event) => this.clickHandler(event)}></div>
                    <div className="TestimonialsItem-controller controller2" onClick={(event) => this.clickHandler(event)}></div>
                    <div className="TestimonialsItem-controller controller3" onClick={(event) => this.clickHandler(event)}></div>
                    <div className="TestimonialsItem-controller controller4" onClick={(event) => this.clickHandler(event)}></div>
                </div>
            </div>
        )
    }
}

export default Testimonials