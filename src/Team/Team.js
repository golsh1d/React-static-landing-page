import './Team.css'
import React from 'react'
import TeamMember from './TeamMember'

export default function Team() {
  let TeamMemberProps = [
    {id : 1 , image : 'https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/images/front-page/front-page-team-1.jpg' , name : 'Mark Lawrance' , color : 'rgb(241, 139, 109)', role : 'Web Designer' , descrption : 'Creative, detail-oriented, always focused.'},
    {id : 2 , image : 'https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/images/front-page/front-page-team-2.jpg' , name : 'Jane Stenton' , color : '#F1D204', role : 'SEO Specialist' , descrption : 'Curious, tech-geeck and gets serious when it comes to work.'},
    {id : 3 , image : 'https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/images/front-page/front-page-team-3.jpg' , name : 'John Smith' , color : '#795E95', role : 'Developer' , descrption : 'Enthusiastic, passionate with great sense of humor.'},
  ]
  return (
    <div className='Team-wrapper'>
        <div className='Team-main-content container'>
            <div className='Team-title'>Team</div>
            <div className='Team-description'>Meet the people that are going to take your business to the next level.
            </div>
            <div className='Team-member-wrapper'>
                {TeamMemberProps.map((TeamMemberProp) => (
                    <TeamMember {...TeamMemberProp} key={TeamMemberProp.id}/>
                ))}
            </div>
        </div>
    </div>
  )
}