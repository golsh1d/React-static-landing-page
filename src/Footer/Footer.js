import './Footer.css'
import React from 'react'
import FooterContent from './FooterContent'

export default function Footer() {
  let FooterContentProps = [
    {id : 1 , title : "PRODUCTS" , link1 : "Our Work" , link2 : "Club" , link3 : "News" , link4: "Announcement"} ,
    {id : 2 , title : "INFORMATION" , link1 : "Pricing" , link2 : "Terms" , link3 : "Affiliates" , link4: "Blog"} ,
    {id : 3 , title : "SUPPORT" , link1 : "Documentation" , link2 : "FAQs" , link3 : "Forums" , link4: "Contact"} 
  ] 
  return (
    <>
    <div className='Footer-wrapper Footer-wrapper-pb-max-768 Footer-wrapper-pb-min-768'>
        <div className='Footer-main-content container'>
            {FooterContentProps.map(FooterContentProp => (
                <FooterContent key={FooterContentProp.id} {...FooterContentProp}/>
            ))}
        </div>
    </div>
    <div className='bottom-Footer'>
        Made By Golshid Ebrahimi Deldar
    </div>
    </>
  )
}