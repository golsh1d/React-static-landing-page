import './FooterContent.css'
import React from 'react'
import { FaChevronRight } from "react-icons/fa";

export default function FooterContent({title , link1 , link2 , link3 , link4}) {
  return (
    <div className='FooterContent-wrapper FooterContent-wrapper-width-max-768 FooterContent-wrapper-mb-max-768 FooterContent-wrapper-width-min-768 FooterContent-wrapper-mb-min-768'>
        <div className='FooterContent-title'>{title}</div>
        <div className='FooterContent-details'>
            <ul>
                <li><FaChevronRight className='icon'/><a href="#">{link1}</a></li>
                <li><FaChevronRight className='icon'/><a href="#">{link2}</a></li>
                <li><FaChevronRight className='icon'/><a href="#">{link3}</a></li>
                <li><FaChevronRight className='icon'/><a href="#">{link4}</a></li>
            </ul>
        </div>
    </div>
  )
}