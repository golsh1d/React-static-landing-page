import "./ProjectsItem.css"

function ProjectsItem({ image }) {
    return(
        <div className="Projects-Item Projects-Item-width-50-max-768 Projects-Item-width-25-min-768">
            <img src={image} alt="ProjectsItem" />
            <div className="overlay"></div>
        </div>
    )
}

export default ProjectsItem