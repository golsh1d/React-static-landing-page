import './Projects.css'
import ProjectsItem from './ProjectsItem'

function Projects() {
    let ProjectsItemProps = [
        {image : './Img/Projects/Projects1.jfif'} ,
        {image : './Img/Projects/Projects3.jfif'} ,
        {image : './Img/Projects/Projects2.jfif'} ,
        {image : './Img/Projects/Projects4.jfif'} ,
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
                <ProjectsItem {...ProjectsItemProps[0]}/>
                <ProjectsItem {...ProjectsItemProps[1]}/>
                <ProjectsItem {...ProjectsItemProps[2]}/>
                <ProjectsItem {...ProjectsItemProps[3]}/>
            </div>
        </div>
    )
}

export default Projects