import './Projects.css'
import ProjectsItem from './ProjectsItem'

function Projects() {
    let ProjectsItemProps = [
        {id : 1 , image : './Img/Projects/Projects1.jfif'} ,
        {id : 2 , image : './Img/Projects/Projects3.jfif'} ,
        {id : 3 , image : './Img/Projects/Projects2.jfif'} ,
        {id : 4 , image : './Img/Projects/Projects4.jfif'} ,
    ]

    return(
        <div className="Projects-wrapper">
            <div className="Projects-header">
                <div className="container">
                    <div className="Projects-title">Projects</div>
                    <div className="Projects-description">You'll love our work. Check it out!</div>
                </div>
            </div>
            <div className="Projects-content">
                {ProjectsItemProps.map((ProjectsItems) => (
                    <ProjectsItem key={ProjectsItems.id} {...ProjectsItems}/>
                ))}
            </div>
        </div>
    )
}

export default Projects