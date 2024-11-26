import './CounterContent.css'

function CounterContent({ count , description }) {
    return(
        <div className='CounterContent-wrapper CounterContent-wrapper-width-max-768 CounterContent-wrapper-width-min-768
        CounterContent-wrapper-mb-max-768 CounterContent-wrapper-mb-min-768'>
            <div className='CounterContent-count'>{count}</div>
            <div className='CounterContent-description'>{description}</div>
        </div>
    )
}

export default CounterContent