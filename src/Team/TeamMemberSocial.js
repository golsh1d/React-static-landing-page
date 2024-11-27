import './TeamMemberSocial.css'
import React from 'react'

export default function TeamMemberSocial({icon , color}) {
    return (
        <div className='TeamMember-social' style={{color : color , borderColor : color}}>
            <span class="material-symbols-outlined">
                {icon}
            </span>
        </div>
    )
}