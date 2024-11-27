import React from 'react'
import './TeamMember.css'
import TeamMemberSocial from './TeamMemberSocial'

export default function TeamMember({ image , name , role , color , descrption }) {
  let TeamMemberSocialProps = [
    {id : 1, icon : 'call' , color : color},
    {id : 1, icon : 'mail' , color : color},
    {id : 1, icon : 'chat' , color : color},
  ]  

  return (
    <div className='TeamMember-wrapper TeamMember-wrapper-width-max-768 TeamMember-wrapper-width-min-768
    TeamMember-wrapper-width-min-992 TeamMember-wrapper-mb-max-768 TeamMember-wrapper-mb-min-768 TeamMember-wrapper-mb-min-992'>
        <div className='TeamMember-img-wrapper'>
            <img src={image} alt="" />
        </div>
        <div className="TeamMember-detail-wrapper">
            <div className='TeamMember-name'>{name}</div>
            <div className='TeamMember-role' style={{ color : color }}>{role}</div>
            <div className='TeamMember-description'>{descrption}</div>
            <div className='TeamMember-social-wrapper'>
                {TeamMemberSocialProps.map((TeamMemberSocialProp) => (
                    <TeamMemberSocial {...TeamMemberSocialProp}/>
                ))}
            </div>
        </div>
    </div>
  )
}