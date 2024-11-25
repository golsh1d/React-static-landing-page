import './Services.css'
import ServicesContent from './ServicesContent'

function Services() {

    let servicesContentProps = [
        {icon : 'edit', title : 'Web Design', color : 'rgb(241, 139, 109)' ,description : 'Consectetur adipiscing elit. Praesent molestie urna hendrerit erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue dapibus porttitor at in mauris. Pellentesque commodo...'},
        {icon : 'code', title : 'Web Developement', color : '#F1D204' ,description : 'Consectetur adipiscing elit. Praesent molestie urna hendrerit erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue dapibus porttitor at in mauris. Pellentesque commodo...'},
        {icon : 'search', title : 'SEO Analysis', color : '#6A4D8A' ,description : 'Consectetur adipiscing elit. Praesent molestie urna hendrerit erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue dapibus porttitor at in mauris. Pellentesque commodo...'},
    ]

    return(
        <div className="Services-wrapper">
            <div className='Services-main-content container'>
                <div className='Services-title'>Services</div>
                <div className='Services-description'>In order to help you grow your business, our carefully selected experts can advise you in in the following areas:</div>
                <div className='Services-contents-wrapper'>
                    {servicesContentProps.map((ServicesContentProp) => (
                        <ServicesContent {...ServicesContentProp}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services