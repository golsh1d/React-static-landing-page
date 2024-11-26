import './Counter.css'
import CounterContent from './CounterContent'

function Counter() {

    let CounterContentProps = [
        {id : 1 , count : 260 , description : 'PROJECTS'},
        {id : 2 , count : 120 , description : 'CLIENTS'},
        {id : 3 , count : 260 , description : 'COFFES'},
    ]

    return(
        <div className='Counter-wrapper'>
            <div className='Counter-main-content container'>
                {CounterContentProps.map((CounterContentProp) => (
                    <CounterContent key={CounterContentProp.id} {...CounterContentProp}/>
                ))}
            </div>
        </div>
    )
}

export default Counter