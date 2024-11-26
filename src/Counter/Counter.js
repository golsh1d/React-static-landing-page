import './Counter.css'
import CounterContent from './CounterContent'

function Counter() {

    let CounterContentProps = [
        {count : 260 , description : 'PROJECTS'},
        {count : 120 , description : 'CLIENTS'},
        {count : 260 , description : 'COFFES'},
    ]

    return(
        <div className='Counter-wrapper'>
            <div className='Counter-main-content container'>
                {CounterContentProps.map((CounterContentProp) => (
                    <CounterContent {...CounterContentProp}/>
                ))}
            </div>
        </div>
    )
}

export default Counter